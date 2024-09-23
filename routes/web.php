<?php

use App\Http\Controllers\ObservationController;
use App\Http\Controllers\ObservationSpotController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\GzipMiddleware;
use App\Http\Resources\ObservationResource;
use App\Http\Resources\ObservationSpotResource;
use App\Models\Observation;
use App\Models\ObservationSpot;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $ttl = 60;
    $observationCount = Cache::remember('observationCount', $ttl, function () {
        return Observation::all()->count();
    });
    $observationSpotCount = Cache::remember('observationSpotCount', $ttl, function () {
        return ObservationSpot::all()->count();
    });
    $weeklyObservationCont = Cache::remember('weeklyObservationCont', $ttl, function () {
        return Observation::where('created_at', '>', Carbon::now()
            ->startOfWeek())->where('created_at', '<', Carbon::now()->endOfWeek())
            ->count();
    });
    $weeklyObservationSpotCount = Cache::remember('weeklyObservationSpotCount', $ttl, function () {
        return ObservationSpot::where('created_at', '>', Carbon::now()->startOfWeek())
            ->where('created_at', '<', Carbon::now()->endOfWeek())
            ->count();
    });
    // @todo It would be ideal to make it work with other drivers as well; one way to access it is a macro
    //dd(Observation::select(DB::raw('sum(json_length(photos)) as count'))->whereNotNull('photos')->whereJsonLength('photos', '>', 0)->value('count'));

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'observationCount' => $observationCount,
        'observationSpotCount' => $observationSpotCount,
        'weeklyObservationCont' => $weeklyObservationCont,
        'weeklyObservationSpotCount' => $weeklyObservationSpotCount,
    ]);
});

Route::get('instructions', function() {
    return Inertia::render('Instructions');
})->name('instructions');

Route::get('contact', function() {
    return Inertia::render('Contact');
})->name('contact');


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

    Route::get('/my-observations', function () {
        $observationSpots = ObservationSpotResource::collection(ObservationSpot::where('user_id', auth()->id())->get());
        return Inertia::render('Dashboard')
            ->with('observation_spots', $observationSpots)
            ->with('title', __('My observation spots'))
            ->with('main_map', false);
    })->name('my-observation-spots');


    Route::resource('observations', ObservationController::class);

    Route::resource('observation-spots', ObservationSpotController::class);

    //User resource routes
    Route::resource('users', UserController::class);

    //Latest observations
    Route::get('/latest-observations', function () {
        $observations = ObservationResource::collection(Observation::latest()->limit(10)->get());
        return Inertia::render('Observations/Latest', [
            'observations' => $observations,
        ]);
    })->name('latest-observations');

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
