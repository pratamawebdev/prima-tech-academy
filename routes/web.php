<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseVideoController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\SubscribeTransactionController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/details/{course:slug}', [HomeController::class, 'details'])->name('home.details');
Route::get('/category/{category:slug}', [HomeController::class, 'category'])->name('home.category');
Route::get('/pricing', [HomeController::class, 'pricing'])->name('home.pricing');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/checkout', [HomeController::class, 'checkout'])->name('home.checkout')->middleware('role:student');
    Route::post('/checkout/store', [HomeController::class, 'checkout_store'])->name('home.checkout.store')->middleware('role:student');

    Route::get('/learning/{course}/{courseVideoId}', [HomeController::class, 'learning'])->name('home.learning')->middleware('role:student|mentor|owner');

    Route::prefix('dashboard/admin')->name('dashboard.admin.')->group(function () {

        Route::resource('categories', CategoryController::class)->middleware('role:owner');

        Route::resource('mentors', MentorController::class)->middleware('role:owner');

        Route::resource("courses", CourseController::class)->middleware('role:owner|mentor');

        Route::resource('subscribe-transactions', SubscribeTransactionController::class)->middleware('role:owner');

        Route::get('/add/video/{course:id}', [CourseVideoController::class, 'create'])->middleware('role:mentor|owner')->name('course.add_video');

        Route::post('/add/video/save/{course:id}', [CourseVideoController::class, 'store'])->middleware('role:mentor|owner')->name('course.add_video.save');

        Route::resource('course_videos', CourseVideoController::class)->middleware('role:owner|mentor');
    });

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/auth.php';
