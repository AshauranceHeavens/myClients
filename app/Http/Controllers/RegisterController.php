<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }

    public function index()
    {
        return view('auth.register');
    }

    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => 'required|max:255',
            'username' => 'required|max:255',
            'email' => ['required', 'max:255', 'email', Rule::unique('users', 'email')],
            'password' => 'required|confirmed',
        ]);

        $formFields['password'] = Hash::make($formFields['password']);

        $User = User::create($formFields);

        auth()->login($User);

        return redirect()->route('dashboard');
    }
}
