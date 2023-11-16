<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ObservationControllerTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

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
        $this->seed();
        $this->actingAs(\App\Models\User::factory()->create());
        $response = $this->post(route('observations.create', ['name' => 'test', 'coordinates' => [1, 2]]))->assertOk();

        $response->assertInertia(fn(AssertableInertia $page) => $page->component('Observations/Create'));
    }

}
