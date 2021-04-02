@extends('layouts.basic')
@section('title', 'Boss Timer')

@section('content')

<div id="table-worldboss">
    <div class="row table-header">
        <div class="col-sm-4" id="wbname-div"><span id="wbname-title"></span></div>
        <div class="col-sm-3" id="localtime-div"><span id="localtime-title"></span><br><span id="nowtimezone" class="table-sub-header"><span id="nowtime"></span></span></div>
        <div class="col-sm-3" id="utctime-div"><span id="utctime-title"></span><br><span class="table-sub-header">(UTC)</span></div>
        <div class="col-sm-2" id="waypoint-div"><span id="waypoint-title"></span></div>
    </div>
</div>

<div id="note">
    <p id="note-title"></p>
    <ul id="note-content">
    </ul>
    <a href="#header" id="note-totop"></a>
    <p align="center">
        <a href="http://www.guildnews.de"><img class="image-first" src={{ url("/assets/tool_timer/GN_DrachenLogo3.png") }} height="100" alt="Guildnews Logo Dragon"></a>
        <a href="http://db.guildnews.de"><img class="image-links" src={{ url("/assets/tool_timer/db_logo_german-neu.png") }} width="350" alt="Guild Wars 2 Database"></a>
        <a href="http://www.guildnews.de/news/?nc=56"><img class="image-links" src={{ url("/assets/tool_timer/podcastNewsHeader.jpg") }} width="350" alt="Guildnews Podcast"></a>
    </p>
</div>

<div id="footer">
    <p id="footer-1">Original work by <a href="http://about.me/howar31" target="_blank">Howar31</a>
        @ 2014.04.17 and modified by <a href="https://twitter.com/durzan">Durzan</a>
        @ 2015.05.04
    </p>
    <p id="footer-2">The original project is hosted on <a href="https://github.com/howar31/GW2Timer" target="_blank">GitHub</a>.</p>
    <p id="footer-3"><a href="http://www.guildnews.de/imprint/">Impressum</a></p>
</div>


<link href={{ url('css/calc.css') }} rel="stylesheet">
<script src={{ url('js/calc.js') }}></script>

@endsection
