@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="mb-3 w-75 mx-auto ">
            <div class="p-3">
                <h1>
                    {{ $user->name }}
                </h1>
                <p cl>
                    Posted {{ $posts->count() }} {{ Str::plural('post', $posts->count()) }}
                    and received {{ $user->receivedLikes->count() }}
                    {{ Str::plural('like', $user->receivedLikes->count()) }}
                </p>
            </div>
            <div class="bg-light p-3 shadow rounded">
                @if ($posts->count())
                    @foreach ($posts as $post)
                        <x-Post :post="$post" />
                    @endforeach
                @else
                    <p class="p-3 ps-0">
                        {{ $user->name }} no posts
                    </p>
                @endif
                {{ $posts->links() }}
            </div>
        </div>

    </div>
@endsection
