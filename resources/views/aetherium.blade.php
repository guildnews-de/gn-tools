@extends('layouts.basic')
@section('title', 'Aetherium Rechner')

@section('content')

<link href='css/calc.css' rel="stylesheet">
<script src='js/calc.js'></script>

<div class="container">
    <div id="frame" class="row justify-content-center">
        <div id="calculator" class=" card bg-secondary m-2">
            <div class="card-body ">
                <select id="mining" onchange="miningChanged(this)" class="form-control my-1">
                    <option id="miningZero">Mining Rate 0</option>
                    <option id="miningOne">Mining Rate 1</option>
                    <option id="miningTwo">Mining Rate 2</option>
                    <option id="miningThree">Mining Rate 3</option>
                    <option id="miningFour">Mining Rate 4</option>
                    <option id="miningFive">Mining Rate 5</option>
                    <option id="miningSix">Mining Rate 6</option>
                </select>

                <div id="inputGoal" class="input-group my-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="curGoal">
                            Aetherium
                            <img src="/assets/tool_aetherium/aetherium.png">
                        </span>
                    </div>
                    <input id="aetheriumGoal" type="text" class="form-control" placeholder="achievable amount">
                </div>
                <div id="inputAtm" class="input-group my-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="curAtm">
                            Aetherium
                            <img src="/assets/tool_aetherium/aetherium.png">
                        </span>
                    </div>
                    <input id="aetheriumAtm" type="text" class="form-control" placeholder="current amount">
                </div>

                <button type="button" id="bCalculate" class="btn btn-primary btn-block my-3">Calculate time</button>

                <input id="dateAtGoal" class="form-control my-1" type="text" placeholder="time till amount to be achieved" readonly>

                <div class="input-group my-1">
                    <div class="input-group-prepend" id="curTime">
                        <span class="input-group-text">Days:Hours:Minutes</span>
                    </div>
                    <input id="timeTillGoal" class="form-control" type="text" readonly>
                </div>
            </div>
        </div>
        <div id="border" class="card bg-info text-white m-2">
            <div class="card-header">
                <h3><i class="fa fa-info-circle"></i> Information</h3>
            </div>
            <div class="card-body">
                <div id="infos">
                    <table class="table table-bordered text-white">
                        <tr>
                            <td><b id="mPerAeth"></b>Seconds per Aetherium</td>
                            <td id="mPerAethValue">60</td>
                        </tr>
                        <tr>
                            <td><b id="aethPerH"></b>Aetherium per Hour</td>
                            <td id="aethPerHValue">60</td>
                        </tr>
                        <tr>
                            <td><b id="aethPerD"></b>Aetherium per Day</td>
                            <td id="aethPerDValue">1440</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div id="footer" class="row">
            <p id="footer-1">Developed by <a href="https://twitter.com/durzan">Durzan</a> for <a href="https://www.guildnews.de/">Guildnews</a>. Last update: 17.02.2016</p>

            <p id="footer-2">This calculator is in a alpha-phase, so there can be faults in the calculations.</p>

            <p id="footer-3"><a href="https://www.guildnews.de/impressum/">Imprint</a></p>
        </div>
    </div>

    @endsection
