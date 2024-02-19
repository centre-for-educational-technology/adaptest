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
            'odor' => 'nullable|string',
            'color_turbidity' => 'nullable|string',
            'conditions' => 'required|string',
            'water_temperature' => 'nullable|numeric',
            'air_temperature' => 'nullable|numeric',
            'ph' => 'nullable|numeric',
            'specific_conductance' => 'nullable|numeric',
            'total_dissolved_solids' => 'nullable|numeric',
            'nitrate' => 'nullable|numeric',
            'bicarbonate' => 'nullable|numeric',
            'redox_potential' => 'nullable|numeric',
            'dissolved_oxygen_percent' => 'nullable|numeric',
            'dissolved_oxygen_mgl' => 'nullable|numeric',
            'discharge' => 'nullable|numeric',
            'water_flow' => 'nullable|numeric',
            'flow_direction' => 'nullable|string',
            'erosion' => 'nullable|boolean',
            'nature' => 'nullable|numeric',
            'riparian_vegetation' => 'nullable|numeric',
            'vegetation_coverage' => 'nullable|numeric',
            'tree_roots' => 'nullable|boolean',
            'bottom' => 'nullable|numeric',
            'aquatic_vegetation' => 'nullable|numeric',
            'buildings' => 'nullable|boolean',
            'agricultural_activity' => 'nullable|boolean',
            'roads' => 'nullable|boolean',
            'park' => 'nullable|boolean',
            'beach' => 'nullable|boolean',
            'boat_bridge' => 'nullable|boolean',
            'shore_facility' => 'nullable|boolean',
            'dams' => 'nullable|boolean',
            'littering' => 'nullable|boolean',
            'water_pollution' => 'nullable|boolean',
            'water_body_kr_code' => 'required|string',
            'observation_spot_id' => 'nullable',


            'latitude' => 'numeric',
            'longitude' => 'numeric',

            'observation_spot_name' => 'required_if:observation_spot_id,null',
            'observation_spot_description' => 'required_if:observation_spot_id,null',
        ];
    }
}

