<?php

namespace App\Http\Controllers;

use App\Http\Requests\ObservationSpotRequest;
use App\Http\Resources\ObservationResource;
use App\Http\Resources\ObservationSpotResource;
use App\Models\ObservationSpot;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class ObservationSpotController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', ObservationSpot::class);

        return Inertia::render('ObservationSpots/Index', [
            'observation_spots' => ObservationSpotResource::collection(ObservationSpot::paginate(self::PAGE_SIZE)),
        ]);

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
            //other observation spots for this water body excluding the current observation spot
            'other_observation_spots' => ObservationSpotResource::collection($observationSpot->waterBody->observationSpots->where('id', '!=', $observationSpot->id)),
            'observations' => ObservationResource::collection($observationSpot->observations->load('user')),]);


    }

    public function edit(ObservationSpot $observationSpot): InertiaResponse
    {
        $this->authorize('update', $observationSpot);

        return Inertia::render('ObservationSpots/Edit', [
            'observation_spot' => $observationSpot,
            'water_bodies' => $observationSpot->waterBody->get(),
        ]);
    }

    public function update(ObservationSpotRequest $request, ObservationSpot $observationSpot): InertiaResponse
    {
        $this->authorize('update', $observationSpot);


        $observationSpot->update($request->validated());

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

    public function destroy(ObservationSpot $observationSpot): InertiaResponse
    {
        $this->authorize('delete', $observationSpot);

        $observationSpot->delete();

        //index page
        return Inertia::render('ObservationSpots/Index', [
            'observation_spots' => ObservationSpotResource::collection(ObservationSpot::all()),
        ]);
    }

    public function mine(): InertiaResponse
    {
        $observationSpots = ObservationSpotResource::collection(ObservationSpot::where('user_id', auth()->id())->get());

        return Inertia::render('Dashboard')
            ->with('observation_spots', $observationSpots)
            ->with('title', __('My observation spots'))
            ->with('main_map', false);
    }
}
