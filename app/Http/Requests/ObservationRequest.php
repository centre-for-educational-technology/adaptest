<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ObservationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'measuring_time' => 'required|date',
            'odor' => 'required|string',
            'color_turbidity' => 'required|string',
            'water_temperature' => 'required|numeric',
            'air_temperature' => 'required|numeric',
            'pH' => 'required|numeric',
            'specific_conductance' => 'required|numeric',
            'total_dissolved_solids' => 'required|numeric',
            'nitrate' => 'required|numeric',
            'bicarbonate' => 'required|numeric',
            'redox_potential' => 'required|numeric',
            'dissolved_oxygen_percent' => 'required|numeric',
            'dissolved_oxygen_ppm' => 'required|numeric',
            'discharge' => 'required|numeric',
            'water_flow' => 'required|numeric',
            'erosion' => 'required|boolean',
            'nature' => 'required|numeric',
            'riparian_vegetation' => 'required|numeric',
            'vegetation_coverage' => 'required|numeric',
            'tree_roots' => 'required|boolean',
            'bottom' => 'required|numeric',
            'aquatic_vegetation' => 'required|numeric',
            'buildings' => 'required|boolean',
            'agricultural_activity' => 'required|boolean',
            'roads' => 'required|boolean',
            'park' => 'required|boolean',
            'beach' => 'required|boolean',
            'boat_bridge' => 'required|boolean',
            'shore_facility' => 'required|boolean',
            'dams' => 'required|boolean',
            'littering' => 'required|boolean',
            'water_pollution' => 'required|boolean',
        ];
    }
}

