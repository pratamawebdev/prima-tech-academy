<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;
use App\Models\Category;
use App\Models\CourseStudent;
use App\Models\SubscribeTransaction;
use App\Models\Mentor;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index() {
        $user = Auth::user();
        $coursesQuery = Course::query();

        if($user->hasRole('mentor')) {
            $coursesQuery->whereHas('mentor', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            });

            $students = CourseStudent::whereIn('course_id', $coursesQuery->select('id'))->distinct('user_id')->count('user_id');
        } else {
            $students = CourseStudent::distinct('user_id')->count('user_id');
        }

        $courses = $coursesQuery->count();
        $categories = Category::count();
        $transactions = SubscribeTransaction::count();
        $mentors = Mentor::count();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'students' => $students,
            'courses' => $courses,
            'categories' => $categories,
            'transactions' => $transactions,
            'mentors' => $mentors
        ]);
    }
}
