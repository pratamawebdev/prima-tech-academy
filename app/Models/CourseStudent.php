<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseStudent extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [       
        'user_id',
        'course_id',
    ];
}
