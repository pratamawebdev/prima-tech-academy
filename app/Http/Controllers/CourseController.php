<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\StoreCourseRequest;
use App\Models\Mentor;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Http\Requests\UpdateCourseRequest;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user = Auth::user();
        $query = Course::with(['category', 'mentor.user', 'students'])->orderByDesc('id');
    
        if($user->hasRole('mentor')) {
            $query->whereHas('mentor', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            });
        }

        $courses = $query->paginate(10);

        return Inertia::render('Dashboard/Admin/Courses/Index', [
            'courses' => $courses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $categories = Category::all();
        return Inertia::render('Dashboard/Admin/Courses/Create',[
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        //
        $mentor = Mentor::where('user_id', Auth::user()->id)->first();

        if (!$mentor) {
            return redirect()->route('dashboard.admin.courses.index')->withErrors('Unauthorized or invalid mentor');
        }

        DB::transaction(function () use ($mentor , $request) {
            $validated = $request->validated();

            if ($request->hasFile('thumbnail')) {
                $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
                $validated['thumbnail'] = $thumbnailPath;
            } else {
                $thumbnailPath = 'images/avatar-default.png';
            }

            $validated['slug'] = Str::slug($validated['name']);
            $validated['mentor_id'] = $mentor->id;

            $course = Course::create($validated);

            if (!empty($validated['course_keypoints'])) {
                foreach($validated['course_keypoints'] as $keypointText) {
                    $course->course_keypoints()->create([
                        'name' => $keypointText,

                    ]);
                }
            }
        });

        return redirect()->route('dashboard.admin.courses.index')->with('success', 'Course created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        
        $category = $course->category;
        $mentor = $course->mentor->user;
        $students = $course->students;
        $courseVideos = $course->course_videos; 
        
        // Gabungkan data ke dalam variabel course
        $course = $course->toArray(); // Konversi objek course ke dalam array
        $course['category'] = $category->toArray(); // Tambahkan data kategori
        $course['mentor'] = $mentor->toArray(); // Tambahkan data mentor
        $course['students'] = $students->toArray(); // Tambahkan data siswa
        $course['course_videos'] = $courseVideos->toArray();
    
        return Inertia::render('Dashboard/Admin/Courses/Show', [
            'course' => $course
        ]);
        // $courseId = $course->id; 
        // $course = Course::with(['category', 'mentor.user', 'students', 'course_videos'])
        //         ->findOrFail($courseId);
        // $courseArray = $course->toArray();
        // return Inertia::render('Dashboard/Admin/Courses/Show', [
        //      'course' => $courseArray
        //     ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
        $categories = Category::all();
        $keypoints = $course->course_keypoints; 
        return Inertia::render('Dashboard/Admin/Courses/Edit', [
            'course' => $course,
            'categories' => $categories,
            'keypoints' => $keypoints
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
        DB::transaction(function () use ($request, $course) {
            $validated = $request->validated();

            if ($request->hasFile('thumbnail')) {
                if ($course->thumbnail && $course->thumbnail != 'images/avatar-default.png') {
                    Storage::disk('public')->delete($course->thumbnail);
                }
                $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
                $validated['thumbnail'] = $thumbnailPath;
            } else {
                $validated['thumbnail'] = $course->thumbnail;
            }

            $validated['slug'] = Str::slug($validated['name']);

            $course->update($validated);

            if (!empty($validated['course_keypoints'])) {
                $course->course_keypoints()->delete();
                foreach($validated['course_keypoints'] as $keypointText) {
                    $course->course_keypoints()->create([
                        'name' => $keypointText,

                    ]);
                }
            }
        });

        return redirect()->route('dashboard.admin.courses.show', $course)->with('success', 'Course updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
        DB::beginTransaction();

        try {
            $course->delete();
            DB::commit();

            return redirect()->route('dashboard.admin.courses.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->route('dashboard.admin.courses.index')->with('error', $e->getMessage());
            // return redirect()->route('dashboard.admin.categories.index')->('error', 'Something went wrong');
        }
    }
}
