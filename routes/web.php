<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ObservationController;
use App\Http\Controllers\ObservationSpotController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;
use App\Http\Middleware\GzipMiddleware;
use App\Http\Resources\ObservationSpotResource;
use App\Models\ObservationSpot;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

// Instructions route
Route::get('instructions', function() {
    return Inertia::render('Instructions');
})->name('instructions');

// Contact routes
Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::post('contact', [ContactController::class, 'store']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        $observationSpots = ObservationSpotResource::collection(ObservationSpot::all());
        return Inertia::render('Dashboard')->with('observation_spots', $observationSpots)
            ->with('title', __('Main map'))
            ->with('main_map', true);
    })->name('dashboard');

    Route::get('/my-observations', [ObservationSpotController::class, 'mine'])->name('my-observation-spots');


    Route::resource('observations', ObservationController::class);

    Route::resource('observation-spots', ObservationSpotController::class);

    //User resource routes
    Route::resource('users', UserController::class);

    //Latest observations
    Route::get('/latest-observations', [ObservationController::class, 'latest'])->name('latest-observations');

    Route::post('/upload-files', [ObservationController::class, 'uploadFiles'])->name('files.upload');

    //delete file
    Route::delete('/delete-file/{file}', [ObservationController::class, 'deleteFile'])->name('files.delete');
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


Route::post('/clear-file-urls', [ObservationController::class, 'clearFileUrls']);
