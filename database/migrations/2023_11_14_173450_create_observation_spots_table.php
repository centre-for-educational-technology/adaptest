<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('observation_spots', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('latitude', 16, 14);
            $table->decimal('longitude', 16, 14);
            $table->text('description')->nullable();
            $table->foreignId('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreignId('water_body_id')->references('id')->on('water_bodies')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('observation_spots');
    }
};
