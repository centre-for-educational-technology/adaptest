<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('observations', function (Blueprint $table) {
            $table->id();
            $table->dateTime('measuring_time')->nullable();
            $table->string('odor')->nullable();
            $table->string('color_turbidity')->nullable();
            $table->string('conditions')->nullable();
            $table->decimal('water_temperature')->nullable();
            $table->decimal('air_temperature')->nullable();
            $table->decimal('ph')->nullable();
            $table->decimal('specific_conductance')->nullable();
            $table->decimal('total_dissolved_solids')->nullable();
            $table->decimal('nitrate')->nullable();
            $table->decimal('bicarbonate')->nullable();
            $table->decimal('redox_potential')->nullable();
            $table->decimal('dissolved_oxygen_percent')->nullable();
            $table->decimal('dissolved_oxygen_mgl')->nullable();
            $table->decimal('discharge')->nullable();
            $table->integer('water_flow')->nullable();
            $table->string('flow_direction')->nullable();
            $table->boolean('erosion')->nullable();
            $table->integer('nature')->nullable();
            $table->integer('riparian_vegetation')->nullable();
            $table->integer('vegetation_coverage')->nullable();
            $table->boolean('tree_roots')->nullable();
            $table->integer('bottom')->nullable();
            $table->integer('aquatic_vegetation')->nullable();
            $table->boolean('buildings')->nullable();
            $table->boolean('agricultural_activity')->nullable();
            $table->boolean('roads')->nullable();
            $table->boolean('park')->nullable();
            $table->boolean('beach')->nullable();
            $table->boolean('boat_bridge')->nullable();
            $table->boolean('shore_facility')->nullable();
            $table->boolean('dams')->nullable();
            $table->boolean('littering')->nullable();
            $table->boolean('water_pollution')->nullable();
            $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('observation_spot_id')->references('id')->on('observation_spots')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('observations');
    }
};
