<?php

namespace App\Http\Controllers;

use App\Console\Callable\FetchAndCacheSpringCount;
use App\Http\Resources\ObservationResource;
use App\Models\Observation;
use App\Models\ObservationSpot;
use App\Models\WaterBody;
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
        $springCount = Cache::get(FetchAndCacheSpringCount::CACHE_KEY, 0);
        $ttl = 60;
        $waterBodyCount = Cache::remember('waterBodyCount', $ttl, fn() => WaterBody::count());
        $observationSpotCount = Cache::remember('observationSpotCount', $ttl, fn() => ObservationSpot::count());
        $observationCount = Cache::remember('observationCount', $ttl, fn() => Observation::count());
        $weeklyObservationCont = Cache::remember('weeklyObservationCont', $ttl, function () {
            return Observation::where('created_at', '>', Carbon::now()
                ->startOfWeek())->where('created_at', '<', Carbon::now()->endOfWeek())
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

        $latestObservations = ObservationResource::collection(Observation::latest()->limit(3)->get());

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'springCount' => $springCount,
            'waterBodyCount' => $waterBodyCount,
            'observationSpotCount' => $observationSpotCount,
            'observationCount' => $observationCount,
            'weeklyObservationCont' => $weeklyObservationCont,
            'photoCount' => $photoCount,
            'latestObservations' => $latestObservations,
        ]);
    }
}
