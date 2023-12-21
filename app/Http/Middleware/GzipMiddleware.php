<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class GzipMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Check if the request URL is for the geojson file
        if ($request->is('geojson/jarved') || $request->is('geojson/vooluvesi')) {
            // Apply gzip compression
            $response->header('Content-Encoding', 'gzip');
            $response->header('Content-Length', strlen(gzencode($response->getContent())));
            $response->setContent(gzencode($response->getContent()));
        }

        return $response;
    }
}
