@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="bg-light w-50 mx-auto shadow rounded p-3 d-flex justify-content-center">
            <form action="{{ route('register') }}" method="post">
                @csrf
                <div class="form-group mt-3">
                    <label class="form-label">Name</label>
                    <input type="text" name="name" placeholder="Your name"
                        class="form-control @error('name') border-danger @enderror" value="{{ old('name') }}">
                    <x-error>
                        @error('name')
                            {{ $message }}
                        @enderror
                    </x-error>
                </div>
                <div class="form-group mt-3">
                    <label class="form-label">Username</label>
                    <input type="text" name="username" placeholder="Your username"
                        class="form-control @error('username') border-danger @enderror" value="{{ old('username') }}">
                    <x-error>
                        @error('username')
                            {{ $message }}
                        @enderror
                    </x-error>
                </div>
                <div class="form-group mt-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" placeholder="Your email"
                        class="form-control @error('email') border-danger @enderror" value="{{ old('email') }}">
                    <x-error>
                        @error('email')
                            {{ $message }}
                        @enderror
                    </x-error>
                </div>
                <div class="form-group mt-3">
                    <label class="form-label">Password</label>
                    <input type="password" name="password" placeholder="Your password"
                        class="form-control @error('password') border-danger @enderror">
                    <x-error>
                        @error('password')
                            {{ $message }}
                        @enderror
                    </x-error>
                </div>

                <div class="form-group mt-3">
                    <label class="form-label">Password again</label>
                    <input type="password" name="password_confirmation" placeholder="Your password" class="form-control">
                </div>
                <button class="btn btn-primary w-100 mt-3">
                    Register
                </button>
            </form>
        </div>
    </div>
@endsection
