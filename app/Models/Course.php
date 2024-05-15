<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'about',
        'path_trailer',
        'thumbnail',
        'mentor_id',
        'category_id',
    ];

    public function category () {
        return $this->belongsTo(Category::class);
    }

    public function mentor () {
        return $this->belongsTo(Mentor::class);
    }

    public function course_videos () {  
        return $this->hasMany(CourseVideo::class);
    }

    public function course_keypoints () {
        return $this->hasMany(CourseKeypoint::class);
    }

    public function students () {
        return $this->belongsToMany(User::class, 'course_students');
    }

}
