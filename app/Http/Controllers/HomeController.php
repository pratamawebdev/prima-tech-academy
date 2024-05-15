<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Home/Index');
    }

    public function details($course) {

        return Inertia::render('Home/Details', [
            'course' => $course
        ]);
    }


}
