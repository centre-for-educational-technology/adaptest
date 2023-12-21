<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('water_bodies', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('code');
            $table->string('type');
            $table->float('area')->nullable();
            $table->string('watershed')->nullable();
            $table->integer('sys_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('water_bodies');
    }
};
