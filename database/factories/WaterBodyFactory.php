<?php

namespace Database\Factories;

use App\Models\WaterBody;
use Illuminate\Database\Eloquent\Factories\Factory;

class WaterBodyFactory extends Factory
{
    protected $model = WaterBody::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'code' => $this->faker->word(),
            'type' => $this->faker->word(),
            'area' => $this->faker->randomFloat(),
            'watershed' => $this->faker->word(),
            'sys_id' => $this->faker->randomNumber(),
        ];
    }
}
