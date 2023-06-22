<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\api\RegisterController as ApiRegisterController;
use App\Http\Controllers\UserController;
use App\Http\Resources\UserResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json(['user' => new UserResource($request->user())]);
});

Route::post('/signup', [ApiRegisterController::class, 'store']);

Route::put('/user/update', [UserController::class, 'update'])->middleware(['auth:sanctum']);

Route::controller(AuthController::class)->group(function () {

    Route::post('/login', 'login')->middleware(['guest']);
    Route::post('/logout', 'logout')->middleware(['auth:sanctum']);
});


Route::controller(ClientsController::class)->group(function () {

    Route::get('/clients', 'index')->middleware(['auth:sanctum']);
    Route::post('/clients', 'index')->middleware(['auth:sanctum']);
    Route::get('/clients/{client}/show', 'show')->middleware(['auth:sanctum']);
    Route::post('/clients/store', 'store')->middleware(['auth:sanctum']);
    Route::delete('/clients/{client}/delete', 'destroy')->middleware(['auth:sanctum']);
    Route::put('/clients/{client}/update', 'update')->middleware(['auth:sanctum']);
});
