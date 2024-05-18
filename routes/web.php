<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\GithubController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseVideoController;
use App\Http\Controllers\SubscribeTransactionController;
use App\Http\Controllers\Auth\GithubController as AuthGithubController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard/admin', function () {
    return Inertia::render('Dashboard/Admin/Index');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/details/{course:slug}', [HomeController::class, 'details'])->name('home.details');
Route::get('/category/{category:slug}', [HomeController::class, 'category'])->name('home.category');
Route::get('/pricing', [HomeController::class, 'pricing'])->name('home.pricing');

Route::get('/auth/github/redirect', [GithubController::class, 'githubRedirect']);

Route::get('/auth/github/callback', [GithubController::class, 'githubCallback']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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

        Route::resource('subscribe_transactions', SubscribeTransactionController::class)->middleware('role:owner');

        Route::get('/add/video/{course:id}', [CourseVideoController::class, 'create'])->middleware('role:mentor|owner')->name('course.add_video');

        Route::get('/add/video/save/{course:id}', [CourseVideoController::class, 'store'])->middleware('role:mentor|owner')->name('course.add_video.save');

        Route::resource('course_videos', CourseVideoController::class)->middleware('role:owner|mentor');
    });
});

require __DIR__ . '/auth.php';
