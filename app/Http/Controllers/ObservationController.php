<?php

namespace App\Http\Controllers;

use App\Enums\AquaticVegetations;
use App\Enums\Bottoms;
use App\Enums\Natures;
use App\Enums\RiparianVegetations;
use App\Enums\VegetationCoverages;
use App\Enums\WaterFlows;
use App\Http\Requests\ObservationRequest;
use App\Http\Resources\ObservationResource;
use App\Models\Observation;
use App\Models\ObservationSpot;
use App\Models\WaterBody;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Encoders\AutoEncoder;
use Intervention\Image\ImageManager;

class ObservationController extends Controller
{
    public function index(): InertiaResponse
    {
        $this->authorize('viewAny', Observation::class);

        return Inertia::render('Observations/Index', [
            'observations' => ObservationResource::collection(Observation::paginate(self::PAGE_SIZE)),
        ]);
    }

    public function create(): InertiaResponse
    {
        $this->authorize('create', Observation::class);

        //get data from post request
        $data = request()->all();
        $observationSpot = null;

        //if we have observation_spot_id, we need to get the data from observation_spot
        if (isset($data['observation_spot_id']) && $data['observation_spot_id'] != 'null') {
            $observationSpot = ObservationSpot::find($data['observation_spot_id']);
            $data['name'] = $observationSpot->waterBody->title;
            $data['water_body_kr_code'] = $observationSpot->waterBody->code;

            $data['coordinates'] = [
                'lat' => $observationSpot->latitude,
                'lng' => $observationSpot->longitude,
            ];
        } else {
            $data['coordinates'] = json_decode($data['coordinates']);
        }

        return Inertia::render('Observations/Create', [
            'observation' => null,
            'water_flows' => WaterFlows::getWaterFlowLabels(),
            'natures' => Natures::getNatureLabels(),
            'riparian_vegetations' => RiparianVegetations::getRiparianVegetationLabels(),
            'vegetation_coverages' => VegetationCoverages::getVegetationCoverageLabels(),
            'bottoms' => Bottoms::getBottomLabels(),
            'aquatic_vegetations' => AquaticVegetations::getAquaticVegetationLabels(),

            'coordinates' => $data['coordinates'],
            'name' => $data['name'],
            'water_body_kr_code' => $data['water_body_kr_code'],
            'observation_spot_id' => $observationSpot->id ?? null,
            'photo_urls' => session('photo_urls', [])

        ]);


    }

    public function store(ObservationRequest $request): RedirectResponse
    {
        $this->authorize('create', Observation::class);

        //check if this is a first observation for this spot, we need to create a new observation spot first
        if (is_null($request->input('observation_spot_id'))) {

            //find WaterBody id by water_body_kr_code
            $waterBody = WaterBody::where('code', $request->input('water_body_kr_code'))->first();
            $observationSpot = ObservationSpot::create([
                'name' => $request->input('observation_spot_name'),
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longitude'),
                'description' => $request->input('observation_spot_description'),
                'user_id' => $request->user()->id,
                'water_body_id' => $waterBody->id,
            ]);

        } else {
            $observationSpot = ObservationSpot::find($request->input('observation_spot_id'));
        }


        $fileNames = [];
        if (session()->has('photo_urls')) {
            $fileUrls = session('photo_urls');
            foreach ($fileUrls as $fileUrl) {
                $fileName = basename($fileUrl);
                $fileNames[] = $fileName;

            }
        }

        Observation::create(array_merge($request->validated(), [
            'observation_spot_id' => $observationSpot->id,
            'user_id' => $request->user()->id,
            'photos' => $fileNames,
        ]));


        // Clear the photo_urls from the session
        session()->forget('photo_urls');

        return Redirect::route('dashboard');
    }

    public function show(Observation $observation): InertiaResponse
    {
        $this->authorize('view', $observation);

        return Inertia::render('Observations/Show', [
            'observation' => new ObservationResource($observation),
        ]);
    }

    public function edit(Observation $observation): InertiaResponse
    {
        $this->authorize('update', $observation);


        return Inertia::render('Observations/Edit', [
            'observation' => new ObservationResource($observation),
            'water_flows' => WaterFlows::getWaterFlowLabels(),
            'natures' => Natures::getNatureLabels(),
            'riparian_vegetations' => RiparianVegetations::getRiparianVegetationLabels(),
            'vegetation_coverages' => VegetationCoverages::getVegetationCoverageLabels(),
            'bottoms' => Bottoms::getBottomLabels(),
            'aquatic_vegetations' => AquaticVegetations::getAquaticVegetationLabels(),
            'coordinates' => [
                'lat' => $observation->observationSpot->latitude,
                'lng' => $observation->observationSpot->longitude,
            ],
            'observation_spot_id' => $observation->observationSpot->id,
            'water_body_kr_code' => $observation->observationSpot->waterBody->code,
            'photo_urls' => !empty($observation->photos) ? array_merge($observation->photos, session('photo_urls', [])) : session('photo_urls', [])
        ]);
    }


    public function update(ObservationRequest $request, Observation $observation): InertiaResponse
    {
        $this->authorize('update', $observation);


        $observation->update($request->validated());

        return Inertia::render('Observations/Show', [
            'observation' => new ObservationResource($observation),
        ]);
    }

    public function destroy(Observation $observation)
    {
        $this->authorize('delete', $observation);

        $observation->delete();

        return Redirect::route('observations.index')
            ->with('flash.banner', __('Observation deleted.'))
            ->with('flash.bannerStyle', 'success');
    }


    public function uploadFiles(Request $request)
    {
        $messages = [
            'photos.*.image' => 'The uploaded file must be an image.',
            'photos.*.mimes' => 'The image must be a file of type: jpeg, png, jpg.',
        ];

        // Validate the request
        $validator = Validator::make($request->all(), [
            'photos.*' => 'image|mimes:jpeg,png,jpg',
        ], $messages);

        if ($validator->fails()) {
            // Redirect back with errors
            session()->flash('message', 'Invalid file type, only jpeg, png, jpg allowed.');
            return Redirect::back()->withErrors($validator);
        }

        // Retrieve the existing fileUrls from the session
        $fileNames = session('photo_urls', []);

        if ($request->hasFile('photos')) {
            $photos = $request->file('photos');

            foreach ($photos as $file) {
                // Generate a unique name for the file
                $filename = uniqid('', false) . '.' . $file->getClientOriginalExtension();


                $manager = new ImageManager(Driver::class);

                $img = $manager->read($file);
                $img->scaleDown(width: 1280);


                // Store the file in the public disk
                Storage::disk('public')->put('observations/' . $filename, $img->encode(new AutoEncoder(quality: 80))->toFilePointer());

                // @todo Need to see if we have to remove the original image object

                // Add the filename to the array of file names
                $fileNames[] = $filename;
            }

            // Store the updated fileNames in the session
            session(['photo_urls' => $fileNames]);

            // Set a flash message and return the file URLs
            session()->flash('message', 'Images stored successfully.');
        } else {
            session()->flash('message', 'No photos uploaded.');
        }

        // Redirect back to the form
        return Redirect::back();
    }

    public function deleteFile($file)
    {

        // Find the observation in the database
        $observation = Observation::where('photos', 'like', '%' . $file . '%')->first();

        if ($observation) {
            // Decode the photos json into an array
            $photos = $observation->photos;

            // Search for the file URL in the array and remove it
            if (($key = array_search($file, $photos)) !== false) {
                unset($photos[$key]);
            }

            // Update the photos in the database
            $observation->photos = $photos;

            $observation->save();
        }
        // Delete the file from storage
        if (Storage::exists('public/observations/' . $file)) {

            Storage::delete('public/observations/' . $file);

            $fileUrls = session('photo_urls', []);
            $fileUrls = array_diff($fileUrls, [$file]);
            session(['photo_urls' => $fileUrls]);

            session()->flash('message', 'File deleted successfully.');
        } else {

            session()->flash('message', 'File not found.');

        }
    }

    public function clearFileUrls()
    {
        session()->forget('photo_urls');

    }

    public function latest(): InertiaResponse
    {
        $observations = ObservationResource::collection(Observation::latest()->limit(10)->get());

        return Inertia::render('Observations/Latest', [
            'observations' => $observations,
        ]);
    }
}

