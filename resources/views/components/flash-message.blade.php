@if (session()->has('message'))
    <div class="position-fixed top-0 d-flex justify-content-center w-100">
        <div class="bg-danger p-3">
            <p class="m-0 text-white">
                {{ session('message') }}
            </p>
        </div>

    </div>
@endif
