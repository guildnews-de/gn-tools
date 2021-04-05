<html>

<head>
    <title>@yield('title', 'Willkommen') | GuildNews Tools</title>

    {{-- Bootstrap stuff --}}
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href={{ url("css/app.css") }} rel="stylesheet">
    <script src="{{ url('js/app.js') }}"></script>

</head>

<body>
    
    @include('layouts.header')

    @yield('content')

</body>

</html>
