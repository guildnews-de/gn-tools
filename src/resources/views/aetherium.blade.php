@extends('layouts.basic')
@section('title', 'Aetherium Rechner')

@section('content')

<div id="headerLogo">
    <h1 id="header"><a href="https://www.guildnews.de/"><img src="/img/aetherium/DrachenLogoAlpha.png" alt="Guildnews Logo" height="110" /></a></h1>
</div>
<div id="lang">
    <button type="button" class="btn btn-default btn-xs" id="bEn">English</button>
    <button type="button" class="btn btn-default btn-xs" id="bGer">Deutsch</button>
    <button type="button" class="btn btn-default btn-xs" id="bFr">Français</button>
</div>
<div id="frame">
    <div id="calculator">

        <div id="input">
            <div style="text-align: center">
                <select id="mining" onchange="miningChanged(this)" class="form-control">
                    <option id="miningZero"></option>
                    <option id="miningOne"></option>
                    <option id="miningTwo"></option>
                    <option id="miningThree"></option>
                    <option id="miningFour"></option>
                    <option id="miningFive"></option>
                    <option id="miningSix"></option>
                </select>
            </div>

            <div id="inputGoal" class="input-group input">
                <div class="input-group-addon" id="curGoal"><img src="/img/aetherium/aetherium.png"></div>
                <input id="aetheriumGoal" type="text" class="form-control">
            </div>
            <div id="inputAtm" class="input-group input">
                <div class="input-group-addon" id="curAtm"></div>
                <input id="aetheriumAtm" type="text" class="form-control">
            </div>
            <button type="button" id="bCalculate" class="btn btn-primary"></button>
            <div class="input">
                <input id="dateAtGoal" class="form-control" type="text">
            </div>
            <div class="input-group input">
                <div class="input-group-addon" id="curTime"></div>
                <input id="timeTillGoal" class="form-control" type="text">
            </div>
        </div>
        <div id="information">
        </div>
    </div>
    <div id="border">
        <div id="infos">
            <h3><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span></h3>
            <table class="table table-bordered">
                <tr>
                    <td><b id="mPerAeth"></b></td>
                    <td id="mPerAethValue">60</td>
                </tr>
                <tr>
                    <td><b id="aethPerH"></b></td>
                    <td id="aethPerHValue">60</td>
                </tr>
                <tr>
                    <td><b id="aethPerD"></b></td>
                    <td id="aethPerDValue">1440</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div id="footer">
    <p id="footer-1">Developed by <a href="https://twitter.com/durzan">Durzan</a> for <a href="https://www.guildnews.de/">Guildnews</a>. Last update: 17.02.2016</p>

    <p id="footer-2"></p>

    <p id="footer-3"><a href="https://www.guildnews.de/impressum/">Imprint</a></p>
</div>

<link href="/css/aetherium/bootstrap.min.css" rel="stylesheet">
<link href="/css/aetherium/calculator.css" rel="stylesheet">
<script src="/js/aetherium/jquery-1.11.2.min.js"></script>
<script src="/js/aetherium/calculator.js"></script>

@endsection
