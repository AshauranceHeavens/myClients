<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'middle_name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'number' => ['nullable', 'regex:/^[0-9]{10,11}$/'],
            'surname' => ['required', 'string', 'max:255'],
            'price' => ['required', 'regex:/^[0-9]*$/'],
            'deposit' => ['required', 'regex:/^[0-9]*$/'],
            'website' => ['required', 'url', 'max:255'],
        ];
    }
}
