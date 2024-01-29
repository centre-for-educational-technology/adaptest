<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Observation;
use App\Models\ObservationSpot;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolesSeeder::class);

        $this->call(UsersSeeder::class);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //if not testing
        if (!app()->environment('testing')) {
            $this->call(WaterBodiesSeeder::class);
        }

        ObservationSpot::factory(3)->create();
        Observation::factory(15)->create();

    }


}
