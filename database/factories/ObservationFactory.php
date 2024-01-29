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

            'odor' => $this->faker->word,
            'measuring_time' => $this->faker->dateTime(),
            'color_turbidity' => $this->faker->word,
            'water_temperature' => $this->faker->randomFloat(2, 0, 10.99),
            'air_temperature' => $this->faker->randomFloat(2, 0, 10.99),
            'ph' => $this->faker->randomFloat(2, 0, 10.99),
            'specific_conductance' => $this->faker->randomFloat(2, 0, 10.99),
            'total_dissolved_solids' => $this->faker->randomFloat(2, 0, 10.99),
            'nitrate' => $this->faker->randomFloat(2, 0, 10.99),
            'bicarbonate' => $this->faker->randomFloat(2, 0, 10.99),
            'redox_potential' => $this->faker->randomFloat(2, 0, 10.99),
            'dissolved_oxygen_percent' => $this->faker->randomFloat(2, 0, 10.99),
            'dissolved_oxygen_mgl' => $this->faker->randomFloat(2, 0, 10.99),
            'discharge' => $this->faker->randomFloat(2, 0, 10.99),
            'water_flow' => 1,
            'erosion' => $this->faker->boolean,
            'nature' => 1,
            'riparian_vegetation' => 1,
            'vegetation_coverage' => 1,
            'tree_roots' => $this->faker->boolean,
            'bottom' => 1,
            'aquatic_vegetation' => 1,
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
            'user_id' => 1,
            'observation_spot_id' => $this->faker->randomElement([1, 2, 3]),

        ];
    }


}
