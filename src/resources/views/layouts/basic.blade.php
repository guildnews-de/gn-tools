<html>

<head>
    <title>@yield('title', 'Willkommen') | GuildNews Tools</title>
    <link href="/css/app.css" rel="stylesheet">
</head>

<body>
    @include('layouts.header')
    <div id="content">
        @yield('content')
    </div>
</body>

</html>
