<?php

namespace App\Console\Callable;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FetchAndCacheSpringCount
{
    const CACHE_KEY = 'springCount';

    public function __invoke(): void {
        Cache::forever(self::CACHE_KEY, $this->fetchSpringCount());
    }

    /**
     * Fetched the count of springs from a WaterAct service API endpoint or fails silently and returns a zero.
     * Logs a stack trace if an exception is thrown when making a request.
     *
     * @return int
     */
    protected function fetchSpringCount(): int
    {
        try {
            $response = Http::get( Config::get('services.water_act.url'). '/api/springs');
        } catch (\Exception $e) {
            Log::error($e->getTraceAsString());

            return 0;
        }

        return $response->json()['count'] ?? 0;
    }
}
