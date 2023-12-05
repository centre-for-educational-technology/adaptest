<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WaterBody extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title',
        'code',
        'type',
        'area',
        'sys_id',
    ];

    public function observationSpots()
    {
        return $this->hasMany(ObservationSpot::class);
    }

}
