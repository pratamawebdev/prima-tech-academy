<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GithubController extends Controller
{
    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $githubUser = Socialite::driver('github')->user();

        // Check if the user already exists
        $user = User::where('email', $githubUser->getEmail())->first();

        if ($user) {
            // Update existing user details if necessary
            $user->update([
                'name' => $githubUser->getName(),
                'github_id' => $githubUser->getId(),
                'avatar' => $githubUser->getAvatar(),
            ]);
        } else {
            // Create a new user if it doesn't exist
            $user = User::create([
                'name' => $githubUser->getName(),
                'email' => $githubUser->getEmail(),
                'password' => bcrypt(Str::random(24)), // Dummy password
                'github_id' => $githubUser->getId(),
                'avatar' => $githubUser->getAvatar(),
            ]);
        }

        // Log the user in
        Auth::login($user, true);

        // Redirect to home or wherever you want
        return redirect()->intended('/');
    }
}