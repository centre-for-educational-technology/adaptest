<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WaterBodiesSeeder extends Seeder
{
    public function run()
    {
        $geojson = file_get_contents(public_path('geojson/jarved.json'));
        $data = json_decode($geojson, true);

        // Loop through the array, and for each item, create a new row in the Water bodies table
        foreach ($data['features'] as $feature) {
            DB::table('water_bodies')->insert([
                'title' => $feature['properties']['nimi'],
                'code' => $feature['properties']['kr_kood'],
                'type' => $feature['properties']['tyyp'],
                'area' => $feature['properties']['pindala'],
                'sys_id' => $feature['properties']['sys_id'],
            ]);
        }


        $geojson = file_get_contents(public_path('geojson/vooluvesi.json'));
        $data = json_decode($geojson, true);

        // Loop through the array, and for each item, create a new row in the Water bodies table
        foreach ($data['features'] as $feature) {
            DB::table('water_bodies')->insert([
                'title' => $feature['properties']['nimi'],
                'code' => $feature['properties']['kr_kood'],
                'type' => $feature['properties']['tyyp'],
                'watershed' => $feature['properties']['valgala'],
                'sys_id' => $feature['properties']['sys_id'],
            ]);
        }
    }
}
