<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('wallet_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_id')->nullable()->references('id')->on('user_wallets');
            $table->foreignId('wallet_id')->references('id')->on('user_wallets');
            $table->smallInteger('description');
            $table->decimal('previous_balance');
            $table->decimal('new_balance');
            $table->decimal('difference');
            $table->timestamps();
            $table->timestamp('refunded_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wallet_transactions');
    }
};
