<?php

namespace App\Http\Controllers;

use App\Models\CourseVideo;
use Illuminate\Http\Request;
use App\Models\Course;
use Inertia\Inertia;
use App\Http\Requests\StoreCourseVideoRequest;
use Illuminate\Support\Facades\DB;

class CourseVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Course $course)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseVideoRequest $request, Course $course)
    {
        //
        DB::transaction(function () use ($course , $request) {
            $validated = $request->validated();

            $validated['course_id'] = $course->id;

            $courseVideo = CourseVideo::create($validated);
        });

        return redirect()->route('dashboard.admin.courses.show', $course->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(CourseVideo $courseVideo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CourseVideo $courseVideo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreCourseVideoRequest $request, CourseVideo $courseVideo)
    {
        //
        DB::transaction(function () use ($request, $courseVideo) {
            $validated = $request->validated();

            $courseVideo->update($validated);
        });

        return redirect()->route('dashboard.admin.courses.show', $courseVideo->course_id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CourseVideo $courseVideo)
    {
        //
        DB::beginTransaction();

        try {
            $courseVideo->delete();
            DB::commit();

            return redirect()->route('dashboard.admin.courses.show', $courseVideo->course_id);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->route('dashboard.admin.courses.show', $courseVideo->course_id)->with('error', $e->getMessage());
            // return redirect()->route('dashboard.admin.categories.index')->('error', 'Something went wrong');
        }
    }
}
