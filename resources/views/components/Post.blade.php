@props(['post'])

<div class="my-2">
    <a href="{{ route('user.posts', $post->user) }}" class="fw-bold text-dark text-decoration-none">
        {{ $post->user->name }}
    </a>
    <span class="text-sm">
        {{ $post->created_at->diffForHumans() }}
    </span>
    <p class="m-0">
        {{ $post->body }}
    </p>
    @can('delete', $post)
        <form action="{{ route('post.delete', $post) }}" method="post">
            @csrf
            @method('DELETE')
            <button class="btn ps-0 text-danger">
                Delete
            </button>
        </form>
    @endcan
    <div class="d-flex align-items-center">
        @auth
            @if (!$post->likedBy(auth()->user()))
                <form action="{{ route('post.likes', $post) }}" method="post">
                    @csrf
                    <button class="btn text-primary ps-0">
                        Like
                    </button>
                </form>
            @else
                <form action="{{ route('post.likes', $post) }}" method="post">
                    @csrf
                    @method('DELETE')
                    <button class="btn text-primary ps-0">
                        Unlike
                    </button>
                </form>
            @endif


        @endauth
        <span>{{ $post->likes->count() }} {{ Str::plural('like', $post->likes->count()) }}</span>
    </div>
</div>
