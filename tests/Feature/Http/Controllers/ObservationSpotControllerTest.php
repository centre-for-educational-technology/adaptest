<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\ObservationSpot;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Database\Seeders\WaterBodiesSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ObservationSpotControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->seed(\Database\Seeders\RolesSeeder::class);


    }

    /**
     * @test
     */
    public function shows_observation_spot()
    {
        // Create a user
        $user = User::factory()->create();

        // Create an observation spot
        $observationSpot = ObservationSpot::factory()->create();

        // Use the created user's id for the request
        $response = $this->actingAs($user)->get(route('observation-spots.show', $observationSpot));


        $response->assertInertia(fn(AssertableInertia $page) => $page->component('ObservationSpots/Show'));
    }

    /**
     * @test
     */
    public function shows_observation_spot_edit_page()
    {
        // Create a user
        $user = User::factory()->create();

        //Make user admin
        $user->attachRole('admin');

        // Create an observation spot
        $observationSpot = ObservationSpot::factory()->create();

        // Use the created user's id for the request
        $response = $this->actingAs($user)->get(route('observation-spots.edit', $observationSpot));

        $response->assertInertia(fn(AssertableInertia $page) => $page->component('ObservationSpots/Edit'));
    }

    /**
     * @test
     */
    public function shows_observation_spot_index_page()
    {
        // Create a user
        $user = User::factory()->create();

        //Make user admin
        $user->attachRole('admin');

        // Create an observation spot
        $observationSpot = ObservationSpot::factory()->create();

        // Use the created user's id for the request
        $response = $this->actingAs($user)->get(route('observation-spots.index'));

        $response->assertInertia(fn(AssertableInertia $page) => $page->component('ObservationSpots/Index'));
    }
}
