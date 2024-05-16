<?php

namespace App\Http\Controllers;

use App\Models\Mentor;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreMentorRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class MentorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $mentors = Mentor::with('user')->orderByDesc('id')->paginate(4);

        return Inertia::render('Dashboard/Admin/Mentors/Index', [
            'mentors' => $mentors
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMentorRequest $request)
    {
        //
        $validated = $request->validated();

        $user = User::where('email', $validated['email'])->first();

        if(!$user) {
            return back()->withErrors([
                "email" => "No user found with this email"
            ]);
        }

        if($user->hasRole('mentor')) {
            return back()->withErrors([
                "email" => "This user is already a mentor"
            ]);
        }

        DB::transaction(function () use ($user, $validated) {
            $validated['user_id'] = $user->id;
            $validated['is_active'] = true;

            Mentor::create($validated);

            if($user->hasRole('student')) {
                $user->removeRole('student');
            }

            $user->assignRole('mentor');
        });

        return redirect()->route('dashboard.admin.mentors.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Mentor $mentor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mentor $mentor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mentor $mentor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mentor $mentor)
    {
        //
        try {
            $mentor->delete();

            $user = \App\Models\User::find($mentor->user_id);
            $user->removeRole('mentor');
            $user->assignRole('student');

            return redirect()->back();
        } catch(\Exception $e) {
            DB::rollBack();
            $error = ValidationException::withMessages([
                'system_error' => ['System Error: ' . $e->getMessage()]
            ]);

            throw $error;
        }
    }
}
