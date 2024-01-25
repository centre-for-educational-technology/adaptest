<?php

namespace App\Http\Controllers;

use App\Http\Requests\ObservationSpotRequest;
use App\Http\Resources\ObservationSpotResource;
use App\Models\ObservationSpot;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ObservationSpotController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', ObservationSpot::class);

        return ObservationSpotResource::collection(ObservationSpot::all());
    }

    public function store(ObservationSpotRequest $request)
    {
        $this->authorize('create', ObservationSpot::class);

        return new ObservationSpotResource(ObservationSpot::create($request->validated()));
    }

    public function show(ObservationSpot $observationSpot): InertiaResponse
    {
        $this->authorize('view', $observationSpot);


        return Inertia::render('ObservationSpots/Show', [
            'observation_spot' => $observationSpot,
            'water_body' => $observationSpot->waterBody,
            'coordinates' => [
                'lat' => $observationSpot->latitude,
                'lng' => $observationSpot->longitude,
            ],
            'observations' => $observationSpot->observations->load('user'),
        ]);

    }

    public function update(ObservationSpotRequest $request, ObservationSpot $observationSpot)
    {
        $this->authorize('update', $observationSpot);

        $observationSpot->update($request->validated());

        return new ObservationSpotResource($observationSpot);
    }

    public function destroy(ObservationSpot $observationSpot)
    {
        $this->authorize('delete', $observationSpot);

        $observationSpot->delete();

        return response()->json();
    }
}
