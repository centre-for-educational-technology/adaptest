<?php

namespace App\Providers;

use App\Models\Observation;
use App\Models\ObservationSpot;
use App\Models\User;
use App\Policies\ObservationPolicy;
use App\Policies\ObservationSpotPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Observation::class => ObservationPolicy::class,
        ObservationSpot::class => ObservationSpotPolicy::class,
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
