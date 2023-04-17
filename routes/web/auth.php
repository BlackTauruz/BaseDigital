<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    /**
     * Registration Routes
     */
    Route::resource('register', RegisteredUserController::class)->except(['show', 'create', 'edit', 'update', 'destroy']);

    /**
     * Authentication Routes
     */
    Route::controller(AuthenticatedSessionController::class)->prefix('login')->name('login.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
    });

    /**
     * Password Routes
     */
    Route::name('password.')->group(function () {
        /**
         * Forgotten Password Routes
         */
        Route::controller(PasswordResetLinkController::class)->prefix('forgot-password')->group(function () {
            Route::get('/', 'index')->name('forgot.index');
            Route::post('/', 'store')->name('forgot.store');
        });

        /**
         * Password Reset Routes
         */
        Route::controller(NewPasswordController::class)->prefix('reset-password')->group(function () {
            Route::get('/{token}', 'index')->name('reset');
            Route::post('/', 'store')->name('reset.store');
        });
    });
});

Route::middleware('auth')->group(function () {
    /**
     * Email Verification Routes
     */
    Route::controller(EmailVerificationController::class)->prefix('verify-email')->group(function () {
        Route::get('/', 'index')->name('verification.notice');
        Route::middleware('throttle:6,1')->group(function () {
            Route::get('/{id}/{hash}', 'update')->middleware('signed')->name('verification.verify');
            Route::post('/', 'store')->name('verification.send');
        });
    });

    /**
     * Password Confirmation Routes
     */
    Route::controller(ConfirmablePasswordController::class)->prefix('confirm-password')->name('password.')->group(function () {
        Route::get('/', 'index')->name('confirm.index');
        Route::post('/', 'store')->name('confirm.store');
    });

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    /**
     * Unauthentication Routes
     */
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
