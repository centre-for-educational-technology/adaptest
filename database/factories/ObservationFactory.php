<?php

namespace Database\Factories;

use App\Models\Observation;
use Illuminate\Database\Eloquent\Factories\Factory;

class ObservationFactory extends Factory
{
    protected $model = Observation::class;

    public function definition(): array
    {
        return [

            'water_body_id' => $this->faker->numberBetween(1, 100),
            'odor' => $this->faker->word,
            'measuring_time' => $this->faker->dateTime(),
            'color_turbidity' => $this->faker->word,
            'water_temperature' => $this->faker->randomFloat(2, 0, 999999.99),
            'air_temperature' => $this->faker->randomFloat(2, 0, 999999.99),
            'pH' => $this->faker->randomFloat(2, 0, 999999.99),
            'specific_conductance' => $this->faker->randomFloat(2, 0, 999999.99),
            'total_dissolved_solids' => $this->faker->randomFloat(2, 0, 999999.99),
            'nitrate' => $this->faker->randomFloat(2, 0, 999999.99),
            'bicarbonate' => $this->faker->randomFloat(2, 0, 999999.99),
            'redox_potential' => $this->faker->randomFloat(2, 0, 999999.99),
            'dissolved_oxygen_percent' => $this->faker->randomFloat(2, 0, 999999.99),
            'dissolved_oxygen_ppm' => $this->faker->randomFloat(2, 0, 999999.99),
            'discharge' => $this->faker->randomFloat(2, 0, 999999.99),
            'water_flow' => $this->faker->randomNumber(),
            'erosion' => $this->faker->boolean,
            'nature' => $this->faker->randomNumber(),
            'riparian_vegetation' => $this->faker->randomNumber(),
            'vegetation_coverage' => $this->faker->randomNumber(),
            'tree_roots' => $this->faker->boolean,
            'bottom' => $this->faker->randomNumber(),
            'aquatic_vegetation' => $this->faker->randomNumber(),
            'buildings' => $this->faker->boolean,
            'agricultural_activity' => $this->faker->boolean,
            'roads' => $this->faker->boolean,
            'park' => $this->faker->boolean,
            'beach' => $this->faker->boolean,
            'boat_bridge' => $this->faker->boolean,
            'shore_facility' => $this->faker->boolean,
            'dams' => $this->faker->boolean,
            'littering' => $this->faker->boolean,
            'water_pollution' => $this->faker->boolean,
            'user_id' => $this->faker->numberBetween(1, 100),



        ];
    }



}
