<?php

namespace Database\Factories;

use App\Models\ObservationSpot;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ObservationSpotFactory extends Factory
{
    protected $model = ObservationSpot::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'description' => $this->faker->text(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
