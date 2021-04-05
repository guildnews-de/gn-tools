<header role="banner">
    <nav class="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">

        <a class="navbar-brand" href="https://guildnews.de/" accesskey="h">
            <img id="navbar-logo" src='/assets/light_guildnews-logo.png'>
        </a>

        <div class="collapse navbar-collapse mr-auto" id="navToggle">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/">{{ __('header.home') }}</a></li>
                <li class="nav-item"><a class="nav-link" href="/timer">{{ __('header.timer') }} </a></li>
                <li class="nav-item"><a class="nav-link" href="/aetherium">{{ __('header.aetherium') }} </a></li>
                <li class="nav-item"><a class="nav-link" href="/gold">{{ __('header.gold') }} </a></li>
            </ul>
        </div>

        @if (!App::environment('production'))
        <div class="alert alert-warning">
            <strong>Warnung!</strong> An der Seite wird noch gearbeitet.
        </div>
        @endif

        <div class="">
            <div class="btn-group-vertical page-lang">
                <button type="button" value="de" class="btn btn-primary">DE</button>
                <button type="button" value="en" class="btn btn-primary">EN</button>
            </div>

            <div class="btn-group-vertical theme-mode">
                <button type="button" class="btn btn-primary fas fa-sun"></button>
                <button type="button" class="btn btn-primary fas fa-moon"></button>
            </div>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle">
            <span class="navbar-toggler-icon"></span>
        </button>

    </nav>
</header>
