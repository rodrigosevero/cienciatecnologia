<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Rotas públicas (não autenticadas)
Route::post('register', [UserController::class, 'store']); // Rota para registrar novo usuário
Route::post('oauth/token', '\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken');

// Route::post('oauth/token', function (Request $request) {
//     // Rota para obter o token OAuth, pode ser personalizada ou chamada diretamente
//     return response()->json(\Laravel\Passport\Http\Controllers\AccessTokenController::class, 'issueToken');
// });

// Rotas protegidas (autenticadas)
Route::middleware('auth:api')->group(function () {
    // CRUD completo de usuários (exceto store que está na rota pública)
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
    
    // Rotas para 2FA
    Route::post('2fa/enable', [UserController::class, 'enable2FA']);
    Route::post('2fa/verify', [UserController::class, 'verify2FA']);
});
