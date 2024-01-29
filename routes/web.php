<?php

use App\Http\Controllers\ObservationController;
use App\Http\Controllers\ObservationSpotController;
use App\Http\Middleware\GzipMiddleware;
use App\Http\Resources\ObservationResource;
use App\Http\Resources\ObservationSpotResource;
use App\Models\Observation;
use App\Models\ObservationSpot;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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
        return Inertia::render('Dashboard')->with('observation_spots', $obervationSpots);
    })->name('dashboard');

    //create a new observation route
    Route::get('/observations/create', [ObservationController::class, 'create'])->name('observations.create');

    //store a new observation route
    Route::post('/observations/store', [ObservationController::class, 'store'])->name('observations.store');



    Route::resource('observation-spots', ObservationSpotController::class);
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
