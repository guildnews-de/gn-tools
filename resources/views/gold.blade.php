@extends('layouts.basic')
@section('title', 'Gold pro Stunde')

@section('content')

<div class="container-fluid">

    <script src={{ url('js/gold_head.js') }}></script>

    <div id="intro" class="row">
        <div class="card col-lg-8">
            <div class="card-header">
                <h2>Willkommen zu Guild Wars 2 - Gold pro Stunde</h2>
            </div>
            <div class="card-header">
                <p>
                    Diese Applikation verfolgt (beinahe) alles, was auf deinem Account vor sich geht und zeigt an, wie viel Gold du bekommen würdest, wenn du alles verkaufen würdest, was du erhalten hast, und wie viel Gold du verloren hast durch die
                    Items,
                    die
                    von deinem Account entfernt wurde (verkauft, zerstört, verbraucht, usw.).
                </p>
                <p>
                    Ich habe gesagt beinahe, weil ich bisher nicht Items und Gold beobachten kann, das im Handelsposten darauf wartet aufgenommen zu werden. Sobald ArenaNet eine neue API hinzugefügt, um diese Informationen zu erhalten, werde ich die
                    Applikation
                    updaten.
                </p>
                <p>
                    Sei dir bewusst, dass in einigen Fällen es dazu kommen kann, dass es 2 oder 3 Refreshes benötigt bis erhaltene oder verlorene Items auftauchen. Die API gibt keine Live Daten zurück, jedes mal wenn sie aufgerufen wird. Sei also
                    bitte
                    geduldig.
                    :)
                </p>
            </div>
        </div>

        <div class="card bg-secondary text-white col-lg-4">
            <div class="card-header">
                <h4>Um zu beginnen, gebe hier einen API Schlüssel ein:</h4>
            </div>
            <div class="card-body form-group">
                <input type="text" id="apiKey" class="form-control" value="">
                <button id="continueIntro" class="btn btn-primary btn-block">Auf gehts!</button>
                <label class="form-check-label m-3" for="saveAPIKey">
                    <input type="checkbox" id="saveAPIKey" class="form-check-inline"> Speichere meinen API Schlüssel lokal, damit ich ihn nächstes Mal nicht eingeben muss
                </label>
                <p>
                    Du besitzt keinen? Gehe auf <a href="https://account.arena.net/" target="_blank">account.arena.net</a> und logge dich in deinen Account ein. Dann erstelle im "Anwendungen" Tab einen neuen API Schlüssel. Achte darauf, dass du die
                    Berechtigungen für wallet, tradingpost, account, inventories und characters gesetzt hast.
                </p>
            </div>
        </div>
    </div>

    <div id="menu" style="display:none;">
        <span id="about"><img src={{ url("/assets/tool_gold/about.png") }} alt="about" title="About">About</span>
        <span class="separator">|</span>
        <span id="settings"><img src={{ url("/assets/tool_gold/settings.png" ) }}alt="settings" title="Settings">Einstellungen</span>
        <span class="separator">|</span>
        <span id="countdown"></span>
        <button id="stop">Stop</button>
        <button id="resume">Fortsetzen</button>
        <button id="startOver">Von vorne</button>
    </div>

    <div id="main" class="">
        <div class="card">
            <div class="card-header">
                <h2>
                    <button type="button" class="btn btn-outline-primary toggle" id="toggleSummary"><i class="fas fa-minus-square"></i></button>
                    Zusammenfassung
                </h2>
            </div>
            <div class="card-body">
                <div id="header" class="row">
                    <div id="headerLeft" class="col-lg-6">
                        <table id="summary" class="table-striped">
                            <tr>
                                <td>Initiales Gold (<span id="startTime"></span>):</td>
                                <td id="initialGold"></td>
                            </tr>
                            <tr>
                                <td class="bottomBorder">Momentanes Gold (<span id="currentTime"></span>):</td>
                                <td id="currentGold" class="price bottomBorder"></td>
                            </tr>
                            <tr>
                                <td>Gold Differenz: </td>
                                <td id="overallGoldDifference" class="price"></td>
                            </tr>
                            <tr>
                                <td>+ Ertrag von den erhaltenen Items (vor Gebührenabfuhr): </td>
                                <td id="overallGains" class="price"></td>
                            </tr>
                            <tr>
                                <td>- Auflistungs- and Verkaufsgebühren (15%): </td>
                                <td id="overallFees" class="price"></td>
                            </tr>
                            <tr>
                                <td class="bottomBorder">- Verlust durch verlorene Items (inklusive Gebühren): </td>
                                <td id="overallLosses" class="price bottomBorder"></td>
                            </tr>
                            <tr>
                                <td class="bottomBorder">Ergebnis: </td>
                                <td id="overallResult" class="price bottomBorder"></td>
                            </tr>
                            <tr>
                                <td>Durchschnittliches Gold pro Stunde: </td>
                                <td id="overallAverage" class="price"></td>
                            </tr>
                        </table>
                    </div>
                    <div id="headerRight" class="col-lg-6">
                        <div id="chart"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2>
                    <button type="button" class="btn btn-outline-primary toggle" id="toggleNew"><i class="fas fa-minus-square"></i></button>
                    Erhaltene Items
                </h2>
            </div>
            <div id="newItems" class="card-body">
                <div id="gridNew"></div>
                <div id="spinnerNew" class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
                <p class="none">Bisher keine...</p>
                <div class="results" id="totalNew" style="display: none;"></div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2>
                    <button type="button" class="btn btn-outline-primary toggle" id="toggleOld"><i class="fas fa-minus-square"></i></button>
                    Verlorene Items
                </h2>
            </div>
            <div id="oldItems" class="card-body">
                <div>
                    <div id="gridOld"></div>
                    <div id="spinnerOld" class="spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                    <p class="none">Bisher keine...</p>
                    <div class="results" id="totalOld" style="display: none;"></div>
                </div>
            </div>

        </div>

        <div class="card">
            <div class="card-header">
                <h2>
                    <button type="button" class="btn btn-outline-primary toggle" id="toggleCurrencies"><i class="fas fa-minus-square"></i></button>
                    Andere Währungen
                </h2>
            </div>
            <div class="card-body">
                <div id="otherCurrencies" class="row">
                    <div id="currencies" class="col-lg-6"></div>
                    <div id="currenciesGraph" class="col-lg-6"></div>
                </div>
            </div>

        </div>

    </div>

    <div id="newVersion"></div>
    <div id="warning"></div>

    <footer>
        Made by Deviljeff.1946 - <a href="https://github.com/jfnaud/Guild-Wars-2-Gold-per-hour" target="_blank" title="Project on GitHub">Project on GitHub (v. <span id="currentVersion"></span>)</a>
        <br>
        <span class="clearAPIKey">Setze meinen API Schlüssel zurück</span>
        <!--<br><button id="saveCurrentState">Debug</button>-->
    </footer>

    <div id="popupOverlay"></div>

    <div id="aboutPopup">
        <h2>About</h2>
        <p>Diese Applikation verfolgt (beinahe) alles, was auf deinem Account vor sich geht und zeigt an, wie viel Gold du bekommen würdest, wenn du alles verkaufen würdest, was du erhalten hast, und wie viel Gold du verloren hast durch die
            Items, die von deinem Account entfernt wurde (verkauft, zerstört, verbraucht, usw.).</p>
        <p>Ich habe gesagt beinahe, weil ich bisher nicht Items und Gold beobachten kann, das im Handelsposten darauf wartet aufgenommen zu werden. Sobald ArenaNet eine neue API hinzugefügt, um diese Informationen zu erhalten, werde ich die
            Applikation updaten.</p>
        <p>Sei dir bewusst, dass in einigen Fällen es dazu kommen kann, dass es 2 oder 3 Refreshes benötigt bis erhaltene oder verlorene Items auftauchen. Die API gibt keine Live Daten zurück, jedes mal wenn sie aufgerufen wird. Sei also bitte
            geduldig
            :)</p>
        <hr>
        <p>Schaue dir die <strong>Einstellungen</strong> an, um die Oberfläche und deine Präferenzen anzupassen. Diese Einstellungen werden lokal für das nächste Mal, wenn du diese Applikation verwendest, abgespeichert.</p>
        <hr>
        <p>I had some free time and I wanted to do something useful for the community. I hope you enjoy it as much as I had doing this project! A special thanks to my friends who helped me test this application. If you find bugs or have any
            suggestion on
            how I could improve it, send me an in-game mail at <strong>Deviljeff.1946</strong> or a private message on <a href="https://www.reddit.com/message/compose/?to=Deviljeff" target="_blank" title="Send a private message on reddit">Reddit</a>.
        </p>
    </div>

    <div id="settingsPopup">
        <h2>Einstellungen</h2>
        <table>
            <tr class="threeCols">
                <td><label for="toggleDetails"><input type="checkbox" id="toggleDetails"> Zeige die Item Details</label></td>
                <td colspan="2"><label for="toggleSound"><input type="checkbox" id="toggleSound"> Spiele einen Ton ab bei Aktualisierung</label></td>
            </tr>
            <tr class="threeCols">
                <td>
                    <h3>Sort items by:</h3>
                    <label for="sortByRarity"><input type="radio" value="rarity" name="sortBy" id="sortByRarity"> Seltenheit</label><br>
                    <label for="sortByValue"><input type="radio" value="value" name="sortBy" id="sortByValue"> Absteigende Werte</label>
                </td>
                <td>
                    <h3>Für Item-Wert nutze:</h3>
                    <label for="lowestSeller"><input type="radio" value="lowestSeller" name="valueFrom" id="lowestSeller"> Niedrigester Verkäufer (Angebote)</label><br>
                    <label for="highestBuyer"><input type="radio" value="highestBuyer" name="valueFrom" id="highestBuyer"> Höchster Käufer (Sofortverkauf)</label>
                </td>
                <td>
                    <h3>Gold pro Stunde basierend auf:</h3>
                    <label for="sinceStart"><input type="radio" value="sinceStart" name="baseTime" id="sinceStart"> Zeit vergangen seit Start</label><br>
                    <label for="elapsed"><input type="radio" value="elapsed" name="baseTime" id="elapsed"> Zeit vergangen seit Ausführung</label>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <table id="typesList">
                        <thead>
                            <th><input type="checkbox" id="checkAllTypes" checked="checked"></th>
                            <th colspan="7">Zeige Items dieses Typs:</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" data-type="Armor" id="ArmorItem" class="itemType"></td>
                                <td><label for="ArmorItem">Rüstung</label></td>
                                <td><input type="checkbox" data-type="Back" id="BackItem" class="itemType"></td>
                                <td><label for="BackItem">Rücken-Gegenstand</label></td>
                                <td><input type="checkbox" data-type="Bag" id="BagItem" class="itemType"></td>
                                <td><label for="BagItem">Taschen</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" data-type="Consumable" id="ConsumableItem" class="itemType"></td>
                                <td><label for="ConsumableItem">Verbrauchsgegenstand</label></td>
                                <td><input type="checkbox" data-type="Container" id="ContainerItem" class="itemType"></td>
                                <td><label for="ContainerItem">Behälter</label></td>
                                <td><input type="checkbox" data-type="CraftingMaterial" id="CraftingMaterialItem" class="itemType"></td>
                                <td><label for="CraftingMaterialItem">Handwerksmaterialien</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" data-type="Gathering" id="GatheringItem" class="itemType"></td>
                                <td><label for="GatheringItem">Sammelwerkzeuge</label></td>
                                <td><input type="checkbox" data-type="Gizmo" id="GizmoItem" class="itemType"></td>
                                <td><label for="GizmoItem">Gizmos</label></td>
                                <td><input type="checkbox" data-type="MiniPet" id="MiniPetItem" class="itemType"></td>
                                <td><label for="MiniPetItem">Miniaturen</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" data-type="Tool" id="ToolItem" class="itemType"></td>
                                <td><label for="ToolItem">Wiederverwertungskit</label></td>
                                <td><input type="checkbox" data-type="Trait" id="TraitItem" class="itemType"></td>
                                <td><label for="TraitItem">Eigenschaftenhandbuch</label></td>
                                <td><input type="checkbox" data-type="Trinket" id="TrinketItem" class="itemType"></td>
                                <td><label for="TrinketItem">Schmuck</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" data-type="Trophy" id="TrophyItem" class="itemType"></td>
                                <td><label for="TrophyItem">Trophäen</label></td>
                                <td><input type="checkbox" data-type="UpgradeComponent" id="UpgradeComponentItem" class="itemType"></td>
                                <td><label for="UpgradeComponentItem">Aufwertungen</label></td>
                                <td><input type="checkbox" data-type="Weapon" id="WeaponItem" class="itemType"></td>
                                <td><label for="WeaponItem">Waffen</label></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <label for="ignoreHidden"><input type="checkbox" id="ignoreHidden"> Verberge den Wert von versteckten Items</label>
                </td>
            </tr>
        </table>

        <hr>
        <div id="settingsButtons">
            <button id="restoreDefaults">Stelle Voreinstellungen wieder her</button>
            <button class="clearAPIKey">Setze meinen API Schlüssel zurück</button>
        </div>
    </div>

    <link href={{ url('css/gold.css') }} rel="stylesheet">
    {{-- <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script> --}}

    <script src={{ url('js/gold_vendor.js') }}></script>
    <script src={{ url('js/gold_main.js') }}></script>

</div>

@endsection
