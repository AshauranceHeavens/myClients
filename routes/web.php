<?php

use Spatie\FlareClient\View;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\userController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use PhpParser\Node\Expr\BinaryOp\NotEqual;
use App\Http\Controllers\PostLikeController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserPostController;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

Route::get('/user/{user:username}/posts', [UserPostController::class, 'index'])
    ->name('user.posts');

Route::post('/logout', [LogoutController::class, 'index'])
    ->name('logout');

Route::get('/login', [LoginController::class, 'index'])
    ->name('login');

Route::post('/login', [LoginController::class, 'store'])
    ->name('login');

Route::get('/register', [RegisterController::class, 'index'])
    ->name('register');

Route::post('/register', [RegisterController::class, 'store'])
    ->name('register');


Route::get('/posts', [PostController::class, 'index'])->name('posts');
Route::post('/posts', [PostController::class, 'store']);
Route::delete('/posts/{post}', [PostController::class, 'destroy']);
Route::get('/posts/{post}/show', [PostController::class, 'show'])->name('posts.show');

Route::post('/posts/{post}/likes', [PostLikeController::class, 'store'])
    ->name('post.likes');
Route::delete('/posts/{post}/likes', [PostLikeController::class, 'destroy'])
    ->name('post.likes');

Route::delete('/posts/{post}/delete', [PostController::class, 'destroy'])
    ->name('post.delete');
