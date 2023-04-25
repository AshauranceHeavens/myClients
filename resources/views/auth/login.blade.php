@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="bg-light w-50 mx-auto shadow rounded p-3 d-flex justify-content-center">
            <form action="{{ route('login') }}" method="post">
                @csrf
                @if (session()->has('error'))
                    <div class="bg-danger text-light text-center p-3 rounded">
                        {{ session('error') }}
                    </div>
                @endif
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
                    <input type="checkbox" name="remember" class="form-check-input">
                    <label class="form-check-label">Remember me</label>
                </div>

                <button class="btn btn-primary w-100 mt-3">
                    Login
                </button>
            </form>
        </div>
    </div>
@endsection
