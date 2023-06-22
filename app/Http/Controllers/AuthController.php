<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {


        $formFields = $request->validate([
            'email' => ['email', 'required'],
            'password' => ['required']
        ]);

        if (!auth()->attempt($formFields)) {
            return response()->json(['message' => 'Invalid login credentials'], 302);
        }

        $token = auth()->user()->createToken('main')->plainTextToken;

        return response()->json(['token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response('', 204);
    }
}
