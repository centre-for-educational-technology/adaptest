<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ObservationRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'measuring_time' => 'required|date',
            'odor' => 'string',
            'color_turbidity' => 'string',
            'conditions' => 'string',
            'water_temperature' => 'numeric',
            'air_temperature' => 'numeric',
            'ph' => 'numeric',
            'specific_conductance' => 'numeric',
            'total_dissolved_solids' => 'numeric',
            'nitrate' => 'numeric',
            'bicarbonate' => 'numeric',
            'redox_potential' => 'numeric',
            'dissolved_oxygen_percent' => 'numeric',
            'dissolved_oxygen_mgl' => 'numeric',
            'discharge' => 'numeric',
            'water_flow' => 'numeric',
            'flow_direction' => 'string',
            'erosion' => 'boolean',
            'nature' => 'numeric',
            'riparian_vegetation' => 'numeric',
            'vegetation_coverage' => 'numeric',
            'tree_roots' => 'boolean',
            'bottom' => 'numeric',
            'aquatic_vegetation' => 'numeric',
            'buildings' => 'boolean',
            'agricultural_activity' => 'boolean',
            'roads' => 'boolean',
            'park' => 'boolean',
            'beach' => 'boolean',
            'boat_bridge' => 'boolean',
            'shore_facility' => 'boolean',
            'dams' => 'boolean',
            'littering' => 'boolean',
            'water_pollution' => 'boolean',
            'water_body_kr_code' => 'required|string',


            'latitude' => 'numeric',
            'longitude' => 'numeric',

            'observation_spot_name' => 'sometimes',
            'observation_spot_description' => 'sometimes',
        ];
    }
}

