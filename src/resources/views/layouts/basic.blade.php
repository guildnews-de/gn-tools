<html>

<head>
    <title>@yield('title', 'Willkommen') | GuildNews Tools</title>
    <link href={{ url("css/app.css") }} rel="stylesheet">
    <script src="{{ url('js/app.js') }}"></script>
</head>

<body>
    @include('layouts.header')
    <div id="content">
        @yield('content')
    </div>
</body>

</html>
