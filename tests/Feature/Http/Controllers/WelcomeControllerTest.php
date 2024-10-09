<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Observation;
use App\Models\WaterBody;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Route;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class WelcomeControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function it_shows_welcome_page()
    {
        $this->withoutExceptionHandling();

        Observation::factory()->count(3)->create();

        $response = $this->get(route('welcome'));

        $response->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Welcome')
            ->has('canLogin')
            ->where('canLogin', Route::has('login'))
            ->has('canRegister')
            ->where('canRegister', Route::has('register'))
            ->has('springCount')
            ->where('springCount', 0)
            ->has('waterBodyCount')
            ->where('waterBodyCount', WaterBody::count())
            ->has('observationSpotCount')
            ->where('observationSpotCount', 3)
            ->has('observationCount')
            ->where('observationCount', 3)
            ->has('weeklyObservationCont')
            ->has('photoCount')
            ->where('photoCount', 0)
            ->has('latestObservations', 3)
        );
    }
}
