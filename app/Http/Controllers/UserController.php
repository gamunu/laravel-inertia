<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();  // or User::paginate(10) for pagination
        
        return Inertia::render('Users', [
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
        ]);

        // Generate a random password
        $password = Str::random(12);

        // Add the hashed password to the validated data
        $validated['password'] = Hash::make($password);

        $user = User::create($validated);

        return redirect()->route('users')->with('message', 'User created successfully.');
    }
}