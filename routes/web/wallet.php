<?php

use App\Http\Controllers\Wallet\DepositController;
use App\Http\Controllers\Wallet\RefundController;
use App\Http\Controllers\Wallet\TransferController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('deposit', DepositController::class)->name('deposit');
    Route::post('transfer', TransferController::class)->name('transfer');
    Route::post('refund/{transaction}', RefundController::class)->name('refund');
});
