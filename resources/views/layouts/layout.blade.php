<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    {{-- <script src="https://cdn.tailwindcss.com"></script> --}}
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <title>Posty</title>
    <style>
        .form-control {
            background: #eee;
        }
    </style>
</head>

<body class="mb-5" style="background: #eee;">
    <nav class="navbar navbar-expand-lg bg-light  navbar-light mb-4">
        <div class="container">
            <ul class="d-flex align-items-center list-unstyled mb-0">
                <li class="mx-2">
                    <a href="" class="nav-link text-dark">
                        Home
                    </a>
                </li>
                <li class="mx-2">
                    <a href="{{ route('dashboard') }}" class="nav-link text-dark">
                        Dashboard
                    </a>
                </li>
                <li class="mx-2">
                    <a href="{{ route('posts') }}" class="nav-link text-dark">
                        Posts
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav">

                @auth
                    <li class="navbar-nav">
                        <a href="" class="nav-link">
                            {{ auth()->user()->username }}
                        </a>
                    </li>
                    <li class="navbar-nav">
                        <form class="d-inline-block" action="{{ route('logout') }}" method="post">
                            @csrf
                            <input type="submit" class="btn" value="Logout" id="">
                        </form>
                    </li>
                @endauth
                @guest
                    <li class="navbar-nav">
                        <a href="{{ route('login') }}" class="nav-link">
                            Login
                        </a>
                    </li>
                    <li class="navbar-nav">
                        <a href="{{ route('register') }}" class="nav-link">
                            Register
                        </a>
                    </li>
                @endguest
            </ul>
        </div>
    </nav>
    @yield('content')
</body>

</html>
