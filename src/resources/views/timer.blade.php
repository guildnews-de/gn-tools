@extends('layouts.basic')
@section('title', 'Boss Timer')

@section('content')

<div class="container">

    <h2>Weltboss Timer</h2>
    <div id="table-worldboss">
        <div class="row table-header">
            <div class="col-sm-4" id="wbname-div">
                <span id="wbname-title"></span>
            </div>
            <div class="col-sm-3" id="localtime-div">
                <span id="localtime-title"></span><br>
                <span id="nowtimezone" class="table-sub-header">
                    <span id="nowtime"></span></span>
            </div>
            <div class="col-sm-3" id="utctime-div">
                <span id="utctime-title"></span><br>
                <span class="table-sub-header">(UTC)</span>
            </div>
            <div class="col-sm-2" id="waypoint-div">
                <span id="waypoint-title"></span>
            </div>
        </div>
    </div>


    <div id="note">
        <p id="note-title">Note</p>
        <ul id="note-content">
            <li>Time table data provided by <a href="https://www.guildwars2.com/en/news/the-megaserver-system-world-bosses-and-events/" target="_blank">official news</a>.</li>
            <li>Current event is marked as red background and "<span class="note-red">New</span>" text.</li>
            <li>Hover on one World Boss event will also <span class="note-hover">highlight</span> all the same event on the whole time table.</li>
            <li>Colours on World Boss name are the scale of event <a href="https://www.guildwars2.com/en/news/the-megaserver-system-world-bosses-and-events/" target="_blank">announced by official</a>:<ul>
                    <li><span class="note-green">Greens</span> are <span class="note-underline">Low-Level World Events</span>.</li>
                    <li>Blacks are <span class="note-underline">Standard World Events</span>.</li>
                    <li><span class="note-red">Reds</span> are <span class="note-underline">Hard-Core, Mega-Organized Events</span>.</li>
                </ul>
            </li>
            <li>Click on World Boss names to <span class="note-done">cross them off</span> when you done those events. Click again to undo. Marks will be automatically cleared at server daily reset.</li>
            <li>Click on Waypoint chat link to copy the chat link and paste it in game chat. You will then see a clickable in-game waypoint link.</li>
            <li>"Local Time" is automatically converted to user's current timezone.</li>
            <li>"Server Time" is the in-game server time, which is UTC.</li>
            <li>This page will auto-refresh at 0 second every minute.</li>
            <li>Some World Boss events not in the normal rotation as official announced previously are not listed above. Such as Fire Shaman, Dredge Commissar, Foulbear Chieftain, Eye of Zhaitan and Temple events.</li>
        </ul>
        <a href="#header" id="note-totop">Back to top</a>
    </div>

    <link href={{ url('css/timer.css') }} rel="stylesheet">
    <script src={{ url('js/timer.js') }}></script>

</div>

@endsection
