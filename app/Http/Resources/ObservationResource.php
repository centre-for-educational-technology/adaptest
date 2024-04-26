<?php

namespace App\Http\Resources;

use App\Enums\AquaticVegetations;
use App\Enums\Bottoms;
use App\Enums\Natures;
use App\Enums\RiparianVegetations;
use App\Enums\VegetationCoverages;
use App\Enums\WaterFlows;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Observation */
class ObservationResource extends JsonResource
{

    public static $wrap = null;

    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'measuring_time' => $this->measuring_time,
            'odor' => $this->odor,
            'color_turbidity' => $this->color_turbidity,
            'conditions' => $this->conditions,
            'water_temperature' => $this->water_temperature,
            'air_temperature' => $this->air_temperature,
            'ph' => $this->ph,
            'specific_conductance' => $this->specific_conductance,
            'total_dissolved_solids' => $this->total_dissolved_solids,
            'nitrate' => $this->nitrate,
            'bicarbonate' => $this->bicarbonate,
            'redox_potential' => $this->redox_potential,
            'dissolved_oxygen_percent' => $this->dissolved_oxygen_percent,
            'dissolved_oxygen_mgl' => $this->dissolved_oxygen_mgl,
            'discharge' => $this->discharge,
            'water_flow' => [
                'label' => WaterFlows::getWaterFlowLabels()[$this->water_flow] ?? null,
                'number' => $this->water_flow
            ],
            'flow_direction' => $this->flow_direction,
            'erosion' => $this->erosion,
            'nature' => [
                'label' => Natures::getNatureLabels()[$this->nature] ?? null,
                'number' => $this->nature
            ],
            'riparian_vegetation' => [
                'label' => RiparianVegetations::getRiparianVegetationLabels()[$this->riparian_vegetation] ?? null,
                'number' => $this->riparian_vegetation
            ],
            'vegetation_coverage' => [
                'label' => VegetationCoverages::getVegetationCoverageLabels()[$this->vegetation_coverage] ?? null,
                'number' => $this->vegetation_coverage
            ],
            'tree_roots' => $this->tree_roots,
            'bottom' => [
                'label' => Bottoms::getBottomLabels()[$this->bottom] ?? null,
                'number' => $this->bottom
            ],
            'aquatic_vegetation' => [
                'label' => AquaticVegetations::getAquaticVegetationLabels()[$this->aquatic_vegetation] ?? null,
                'number' => $this->aquatic_vegetation
            ],

            'buildings' => $this->buildings,
            'agricultural_activity' => $this->agricultural_activity,
            'roads' => $this->roads,
            'park' => $this->park,
            'beach' => $this->beach,
            'boat_bridge' => $this->boat_bridge,
            'shore_facility' => $this->shore_facility,
            'dams' => $this->dams,
            'littering' => $this->littering,
            'water_pollution' => $this->water_pollution,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'observation_spot' => new ObservationSpotResource($this->observationSpot),
            'author' => new UserResource($this->user),
            'photos' => $this->photos,
            //just one photo
            'photo' => $this->photos[0] ?? null,
        ];
    }
}
