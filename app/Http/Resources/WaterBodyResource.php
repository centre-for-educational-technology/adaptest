<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\WaterBody */
class WaterBodyResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'code' => $this->code,
            'type' => $this->type,
            'area' => $this->area,
            'watershed' => $this->watershed,
            'sys_id' => $this->sys_id,
            'observation_spots_count' => $this->observation_spots_count,

            'observationSpots' => ObservationSpotResource::collection($this->whenLoaded('observationSpots')),
        ];
    }
}
