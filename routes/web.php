<?php

use App\Http\Controllers\ObservationController;
use App\Http\Controllers\ObservationSpotController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GzipMiddleware;
use App\Http\Resources\ObservationResource;
use App\Http\Resources\ObservationSpotResource;
use App\Models\Observation;
use App\Models\ObservationSpot;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $obervationSpots = ObservationSpotResource::collection(ObservationSpot::all());
        return Inertia::render('Dashboard')->with('observation_spots', $obervationSpots)
            ->with('title', __('Main map'))
            ->with('main_map', true);
    })->name('dashboard');

    Route::get('/my-observations', function () {
        $obervationSpots = ObservationSpotResource::collection(ObservationSpot::where('user_id', auth()->id())->get());
        return Inertia::render('Dashboard')
            ->with('observation_spots', $obervationSpots)
            ->with('title', __('My observation spots'))
            ->with('main_map', false);
    })->name('my-observation-spots');


    Route::resource('observations', ObservationController::class);

    Route::resource('observation-spots', ObservationSpotController::class);

    //User resource routes
    Route::resource('users', UserController::class);


});


Route::get('geojson/jarved', function () {
    $path = public_path('geojson/jarved.json');
    return Response::make(file_get_contents($path), 200, [
        'Content-Type' => 'application/json',
    ]);
})->middleware(GzipMiddleware::class);

Route::get('geojson/vooluvesi', function () {
    $path = public_path('geojson/vooluvesi.json');
    return Response::make(file_get_contents($path), 200, [
        'Content-Type' => 'application/json',
    ]);
})->middleware(GzipMiddleware::class);

Route::get('geojson/karst', function () {
    $path = public_path('geojson/karst.json');
    return Response::make(file_get_contents($path), 200, [
        'Content-Type' => 'application/json',
    ]);
})->middleware(GzipMiddleware::class);
