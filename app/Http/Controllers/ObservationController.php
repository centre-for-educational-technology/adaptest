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
            'coordinates' => $data['coordinates'],
            'name' => $data['name'],

        ]);
    }

    public function store(ObservationRequest $request)
    {
        $this->authorize('create', Observation::class);

        return new ObservationResource(Observation::create($request->validated()));
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
