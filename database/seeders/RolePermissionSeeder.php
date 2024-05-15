<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $ownerRole = Role::create([
            'name' => 'owner',
        ]);

        $studentRole = Role::create([
            'name' => 'student',
        ]);

        $mentorRole = Role::create([
            'name' => 'mentor',
        ]);

        $userOwner = User::create([
            'name' => 'Willy Pratama Cendana',
            'occupation' => 'Software Developer/Mentor',
            'avatar' => 'images/avatar-default.png',
            'email' => 'admin@primatechacademy.com',
            'password' => bcrypt('pratamawebdev'),
        ]);

        $userOwner->assignRole($ownerRole);
    }
}
