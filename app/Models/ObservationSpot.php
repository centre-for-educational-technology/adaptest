<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObservationSpot extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'latitude',
        'longitude',
        'description',
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
