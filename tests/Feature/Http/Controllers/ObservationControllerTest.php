<?php

namespace Tests\Feature\Http\Controllers;

use Database\Seeders\WaterBodiesSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ObservationControllerTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(WaterBodiesSeeder::class);
    }

    /**
     * @test
     * User can access observation create page.
     * as a result.
     *
     * @return void
     * @throws \Throwable
     */
    public function can_access_observation_create_page()
    {
        $this->withoutExceptionHandling();

        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $data = [
            'coordinates' => json_encode([1, 2]),
            'name' => 'test',
            'water_body_kr_code' => 'VEE1023621',
            'observation_spot_id' => 1,
        ];

        $response = $this->get(route('observations.create', $data));

        $response->assertInertia(fn(AssertableInertia $page) => $page->component('Observations/Create'));
    }

    /**
     * @test
     */
    public function it_stores_an_observation()
    {
        $this->withoutExceptionHandling();

        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);

        $data = [
            'measuring_time' => now()->format('Y-m-d H:i:s'),
            'odor' => 'test',
            'color_turbidity' => 'test',
            'conditions' => 'test',
            'ph' => 7,
            'water_temperature' => 20.00,
            'air_temperature' => 25.00,
            'specific_conductance' => 100.00,
            'total_dissolved_solids' => 100.00,
            'nitrate' => 10.00,
            'bicarbonate' => 10.00,
            'redox_potential' => 100.00,
            'dissolved_oxygen_percent' => 100.00,
            'dissolved_oxygen_mgl' => 10.00,
            'discharge' => 10.00,
            'water_flow' => 1,
            'flow_direction' => 'test',
            'erosion' => 0,
            'nature' => 1,
            'riparian_vegetation' => 1,
            'vegetation_coverage' => 1,
            'tree_roots' => 0,
            'bottom' => 1,
            'aquatic_vegetation' => 1,
            'buildings' => 0,
            'agricultural_activity' => 0,
            'roads' => 0,
            'park' => 0,
            'beach' => 0,
            'boat_bridge' => 0,
            'shore_facility' => 0,
            'dams' => 0,
            'littering' => 0,
            'water_pollution' => 0,
            'water_body_kr_code' => 'VEE1023621',
            'latitude' => 1.1,
            'longitude' => 1.1,
            'observation_spot_name' => 'test',
            'observation_spot_description' => 'test',
            'observation_spot_id' => null,
        ];

        $response = $this->postJson(route('observations.store'), $data);

        $response->assertRedirect(route('dashboard')); // replace 'some_route' with the actual route

        $this->assertDatabaseHas('observations', [
            'measuring_time' => $data['measuring_time'],
            'odor' => $data['odor'],
            'color_turbidity' => $data['color_turbidity'],
            'conditions' => $data['conditions'],
            'ph' => $data['ph'],
            'water_temperature' => $data['water_temperature'],
            'air_temperature' => $data['air_temperature'],
            'specific_conductance' => $data['specific_conductance'],
            'total_dissolved_solids' => $data['total_dissolved_solids'],
            'nitrate' => $data['nitrate'],
            'bicarbonate' => $data['bicarbonate'],
            'redox_potential' => $data['redox_potential'],
            'dissolved_oxygen_percent' => $data['dissolved_oxygen_percent'],
            'dissolved_oxygen_mgl' => $data['dissolved_oxygen_mgl'],
            'discharge' => $data['discharge'],
            'water_flow' => $data['water_flow'],
            'flow_direction' => $data['flow_direction'],
            'erosion' => $data['erosion'],
            'nature' => $data['nature'],
            'riparian_vegetation' => $data['riparian_vegetation'],
            'vegetation_coverage' => $data['vegetation_coverage'],
            'tree_roots' => $data['tree_roots'],
            'bottom' => $data['bottom'],
            'aquatic_vegetation' => $data['aquatic_vegetation'],
            'buildings' => $data['buildings'],
            'agricultural_activity' => $data['agricultural_activity'],
            'roads' => $data['roads'],
            'park' => $data['park'],
            'beach' => $data['beach'],
            'boat_bridge' => $data['boat_bridge'],
            'shore_facility' => $data['shore_facility'],
            'dams' => $data['dams'],
            'littering' => $data['littering'],
            'water_pollution' => $data['water_pollution'],
            'observation_spot_id' => 1,
        ]);
    }


}
