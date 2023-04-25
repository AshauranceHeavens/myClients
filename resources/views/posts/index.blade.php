@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="bg-light mb-3 w-75 mx-auto shadow rounded p-3 d-flex flex-column justify-content-center">
            @auth

                <form action="{{ route('posts') }}" method="post">
                    @csrf
                    @if (session()->has('error'))
                        <div class="bg-danger text-light text-center p-3 rounded">
                            {{ session('error') }}
                        </div>
                    @endif

                    <div class="form-group mt-3">
                        <textarea name="body" cols="30" rows="4" placeholder="Post something"
                            class="form-control @error('password') border-danger @enderror"></textarea>
                        <x-error>
                            @error('body')
                                {{ $message }}
                            @enderror
                        </x-error>
                    </div>
                    <button class="btn btn-primary  ">
                        Post
                    </button>
                </form>
            @endauth

            @if ($posts->count())
                @foreach ($posts as $post)
                    <x-Post :post="$post" />
                @endforeach
            @else
                <p class="p-3 ps-0">
                    There are no posts
                </p>
            @endif
            {{ $posts->links() }}
        </div>
    </div>
@endsection
