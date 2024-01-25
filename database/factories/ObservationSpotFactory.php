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
            'name' => $this->faker->randomElement(['Lakeside View', 'River Bend', 'Lake Vista', 'River Outlook', 'Lake Panorama', 'River Landscape']),
            'latitude' => '58.368035113051135',
            'longitude' => '24.584992780042874',
            'description' => $this->faker->text(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'user_id' => User::factory(),
            'water_body_id' => app()->environment('testing') ? WaterBody::factory() : 1,
        ];
    }
}
