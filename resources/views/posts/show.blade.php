@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="bg-light rounded shadow mb-3 p-3 w-75 mx-auto ">
            <x-Post :post="$post" />
        </div>

    </div>
@endsection
