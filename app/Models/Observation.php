<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observation extends Model
{
    use HasFactory;

    protected $fillable = [
        'odor',
        'measuring_time',
        'color_turbidity',
        'water_temperature',
        'air_temperature',
        'pH',
        'specific_conductance',
        'total_dissolved_solids',
        'nitrate',
        'bicarbonate',
        'redox_potential',
        'dissolved_oxygen_percent',
        'dissolved_oxygen_ppm',
        'discharge',
        'water_flow',
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
    ];

    protected $casts = [
        'measuring_time' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function waterBody()
    {
        return $this->belongsTo(WaterBody::class);
    }
}
