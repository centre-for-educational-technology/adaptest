<?php

namespace Database\Factories;

use App\Models\ObservationSpot;
use App\Models\User;
use App\Models\WaterBody;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ObservationSpotFactory extends Factory
{
    protected $model = ObservationSpot::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'latitude' => '60.1699', // '60.1699
            'longitude' => '24.9384', // '24.9384
            'description' => $this->faker->text(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'user_id' => User::factory(),
            'water_body_id' => WaterBody::factory(),
        ];
    }
}
