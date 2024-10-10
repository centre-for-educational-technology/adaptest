<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\ObservationSpot;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class DashboardControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function it_requires_authentication_for_dashboard_page()
    {
        $this->get(route('dashboard'))
            ->assertStatus(302)
            ->assertRedirect(route('login'));
    }
    /**
     * @test
     */
    public function it_shows_dashboard_page()
    {
        // Create a user and authenticate as this user
        $user = User::factory()->create();
        $this->actingAs($user);

        ObservationSpot::factory()->count(3)->create();

        $this->get(route('dashboard'))
            ->assertInertia(fn(AssertableInertia $page) => $page
                ->component('Dashboard')
                ->has('observation_spots', 3)
                ->where('title', 'Main map')
                ->where('main_map', true)
            );
    }
}
