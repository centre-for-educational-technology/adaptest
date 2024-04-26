<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();

        //flash message
        Inertia::share('flash', function () {
            return [
                'message' => session()->get('message'),
                'success' => session()->get('success'),
            ];
        });

        //file urls
        Inertia::share('file_urls', function () {
            return session('file_urls');
        });
    }
}
