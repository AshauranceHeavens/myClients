<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'email' => ['email', 'required', 'max:255'],
            'password' => [
                'required',
                Password::min(8)
                    ->letters()
                    ->symbols()
            ],
        ]);

        $formFields['password'] = bcrypt($formFields['password']);

        $user = User::create($formFields);

        return json_encode(["token" => $user->createToken('main')->plainText()]);
    }
}
