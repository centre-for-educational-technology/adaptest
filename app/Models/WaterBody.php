<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaterBody extends Model
{

    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'title',
        'code',
        'type',
        'area',
        'sys_id',
        'watershed',
    ];

    public function observationSpots()
    {
        return $this->hasMany(ObservationSpot::class);
    }

}
