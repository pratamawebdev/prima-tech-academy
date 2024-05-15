<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categories = Category::orderByDesc('id')->paginate(4);

        return Inertia::render('Dashboard/Admin/Categories/Index', [
            'categories' => $categories
        ]);

        // return Inertia::render('Admin/Categories/Index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest  $request)
    {
           
        // if($request->hasFile('icon')) {
        //     $iconPath = $request->file('icon')->store('icons', 'public');
        //     $validated['icon'] = $iconPath;
        // } else {
        //     $iconPath = 'images/avatar-default.png';
        // }

        // $slug = Str::slug($request->name);

        // $category = Category::create([
        //     'name' => $request->name,
        //     'icon' => "$iconPath",
        //     'slug' => $slug,
        // ]);

        $category = DB::transaction(function () use ($request) {
            
            $validated = $request->validated();
            
            if ($request->hasFile('icon')) {
                $iconPath = $request->file('icon')->store('icons', 'public');
                $validated['icon'] = $iconPath;
            } else {
                $iconPath = 'images/avatar-default.png';
            }

            $validated['slug'] = Str::slug($validated['name']);
            $category = Category::create($validated);
        });
    
        return redirect()->route('dashboard.admin.categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
        return Inertia::render('Admin/Categories/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
{
    DB::transaction(function () use ($request, $category) {
        $validated = $request->validated();
        
        if ($request->hasFile('icon')) {
            // Delete the old icon if it exists and is not the default icon
            if ($category->icon && $category->icon != 'images/avatar-default.png') {
                Storage::disk('public')->delete($category->icon);
            }

            // Store the new icon
            $iconPath = $request->file('icon')->store('icons', 'public');
            $validated['icon'] = $iconPath;
        } else {
            // Retain the old icon if no new icon is uploaded
            $validated['icon'] = $category->icon;
        }

        $validated['slug'] = Str::slug($validated['name']);
        $category->update($validated);
    });

    return redirect()->route('dashboard.admin.categories.index');
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
        DB::beginTransaction();

        try {
            $category->delete();
            DB::commit();

            return redirect()->route('dashboard.admin.categories.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->route('dashboard.admin.categories.index')->with('error', $e->getMessage());
            // return redirect()->route('dashboard.admin.categories.index')->('error', 'Something went wrong');
        }
    }
}
