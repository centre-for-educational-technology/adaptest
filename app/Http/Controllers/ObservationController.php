<?php

namespace App\Http\Controllers;

    use App\Http\Requests\ObservationRequest;
    use App\Http\Resources\ObservationResource;
    use App\Models\Observation;

    class ObservationController extends Controller {
        public function index()
        {
        $this->authorize('viewAny', Observation::class);

        return ObservationResource::collection(Observation::all());
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
