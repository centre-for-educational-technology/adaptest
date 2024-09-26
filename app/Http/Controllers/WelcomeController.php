<?php

namespace App\Http\Controllers;

use App\Models\Observation;
use App\Models\ObservationSpot;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        $ttl = 60;
        $observationCount = Cache::remember('observationCount', $ttl, fn() => Observation::count());
        $observationSpotCount = Cache::remember('observationSpotCount', $ttl, fn() => ObservationSpot::count());
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
        $photoCount = Cache::remember('imageCount', $ttl, function () {
            $column = match (DB::getConfig('driver')) {
                'sqlite' => 'json_array_length(`photos`)',
                'mysql', 'mariadb' => 'json_length(`photos`)',
                'pgsql' => 'jsonb_array_length((`photos`)::jsonb)',
                'sqlsrv' => '(select count(*) from openjson(`photos`))',
            };

            return (int) Observation::select(DB::raw('sum('.$column.') as count'))
                ->whereNotNull('photos')
                ->whereJsonLength('photos', '>', 0)
                ->value('count');
        });

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'observationCount' => $observationCount,
            'observationSpotCount' => $observationSpotCount,
            'weeklyObservationCont' => $weeklyObservationCont,
            'weeklyObservationSpotCount' => $weeklyObservationSpotCount,
            'photoCount' => $photoCount,
        ]);
    }
}
