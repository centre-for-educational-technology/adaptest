<?php

namespace App\Models;

use App\Enums\AquaticVegetations;
use App\Enums\Bottoms;
use App\Enums\Natures;
use App\Enums\RiparianVegetations;
use App\Enums\VegetationCoverages;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observation extends Model
{
    use HasFactory;

    protected $fillable = [
        'odor',
        'measuring_time',
        'color_turbidity',
        'conditions',
        'water_temperature',
        'air_temperature',
        'ph',
        'specific_conductance',
        'total_dissolved_solids',
        'nitrate',
        'bicarbonate',
        'redox_potential',
        'dissolved_oxygen_percent',
        'dissolved_oxygen_mgl',
        'discharge',
        'water_flow',
        'flow_direction',
        'erosion',
        'nature',
        'riparian_vegetation',
        'vegetation_coverage',
        'tree_roots',
        'bottom',
        'aquatic_vegetation',
        'buildings',
        'agricultural_activity',
        'roads',
        'park',
        'beach',
        'boat_bridge',
        'shore_facility',
        'dams',
        'littering',
        'water_pollution',
        'user_id',
        'observation_spot_id',
    ];

    protected $casts = [
        'measuring_time' => 'datetime',
        'nature' => Natures::class,
        'riparian_vegetation' => RiparianVegetations::class,
        'vegetation_coverage' => VegetationCoverages::class,
        'bottom' => Bottoms::class,
        'aquatic_vegetation' => AquaticVegetations::class
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }



}
