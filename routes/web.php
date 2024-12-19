<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return inertia('About');
});

Route::get('/users', [UserController::class, 'index'])->name('users');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
