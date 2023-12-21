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
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\Response as InertiaResponse;

class ObservationController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Observation::class);

        return ObservationResource::collection(Observation::all());
    }

    public function create(): InertiaResponse
    {
        $this->authorize('create', Observation::class);

        //get data from post request
        $data = request()->all();

        return Inertia::render('Observations/Create', [
            'observation' => null,
            'water_flows' => WaterFlows::getWaterFlowLabels(),
            'natures' => Natures::getNatureLabels(),
            'riparian_vegetations' => RiparianVegetations::getRiparianVegetationLabels(),
            'vegetation_coverages' => VegetationCoverages::getVegetationCoverageLabels(),
            'bottoms' => Bottoms::getBottomLabels(),
            'aquatic_vegetations' => AquaticVegetations::getAquaticVegetationLabels(),
            'coordinates' => json_decode($data['coordinates']),
            'name' => $data['name'],
            'water_body_kr_code' => $data['water_body_kr_code'],
            'observation_spot_id' => $data['observation_spot_id'],

        ]);
    }

    public function store(ObservationRequest $request): RedirectResponse
    {
        $this->authorize('create', Observation::class);


        //check if this is a first observation for this spot, we need to create a new observation spot first
        if ($request->input('observation_spot_id') == null || $request->input('observation_spot_id') == 'null') {
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

        }

        $observation = Observation::create(array_merge($request->validated(), [
            'observation_spot_id' => $observationSpot->id,
            'user_id' => $request->user()->id,
        ]));

        return Redirect::route('dashboard');
    }

    public function show(Observation $observation)
    {
        $this->authorize('view', $observation);

        return new ObservationResource($observation);
    }

    public function update(ObservationRequest $request, Observation $observation)
    {
        $this->authorize('update', $observation);

        $observation->update($request->validated());

        return new ObservationResource($observation);
    }

    public function destroy(Observation $observation)
    {
        $this->authorize('delete', $observation);

        $observation->delete();

        return response()->json();
    }
}
