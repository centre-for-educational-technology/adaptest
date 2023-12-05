<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Models\Obser;
use App\Models\Observation;
use App\Models\ObservationSpot;
use App\Policies\ObserPolicy;
use App\Policies\ObservationPolicy;
use App\Policies\ObservationSpotPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
        Observation::class => ObservationPolicy::class,
        Obser::class => ObserPolicy::class,
        ObservationSpot::class => ObservationSpotPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
