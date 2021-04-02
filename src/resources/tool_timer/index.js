function changeCSS(e, t)
{
    var n = document.getElementsByTagName("link").item(t),
        s = document.createElement("link");
    s.setAttribute("rel", "stylesheet"), s.setAttribute("type", "text/css"), s.setAttribute("href", e), document.getElementsByTagName("head").item(0).replaceChild(s, n)
}

function getURLParam(e)
{
    var t = "",
        n = window.location.href;
    if (n.indexOf("?") > -1)
        for (var s = n.substr(n.indexOf("?")).toLowerCase(), a = s.split("&"), o = 0; o < a.length; o++)
            if (a[o].indexOf(e.toLowerCase() + "=") > -1)
            {
                var i = a[o].split("=");
                t = i[1];
                break
            } return unescape(t)
}

function buildElement(e, t, n, s)
{sr
    if (n)
    {
        var a = '<div class="row table-content scale-' + e[t].scale + " " + e[t].id + ' + interesting"><div class="col-sm-4 wbframe' + s + '"><span class="wbid" hidden>' + e[t].id + "</span>" + e[t].name + '<span class="wbmap">' + (e[t].map ? " - " + e[t].map : "") + '</span></div><div class="col-sm-3 localtime">' + e[t].lctime + '</div><div class="col-sm-3 utctime">' + e[t].uptime + '</div><div><table><tr><td><img src="/assets/tool_timer/waypointicon.png" alt="Waypoint Icon" width="32" height="32"></td><td><div class="col-sm-2 waypoint">' + e[t].waypoint + "</div></td></tr></table></div></div>";
        $("#table-worldboss").append(a)
    }
    else
    {
        var a = '<div class="row table-content scale-' + e[t].scale + " " + e[t].id + '"><div class="col-sm-4 wbframe' + s + '"><span class="wbid" hidden>' + e[t].id + "</span>" + e[t].name + '<span class="wbmap">' + (e[t].map ? " - " + e[t].map : "") + '</span></div><div class="col-sm-3 localtime">' + e[t].lctime + '</div><div class="col-sm-3 utctime">' + e[t].uptime + '</div><div><table><tr><td><img src="/assets/tool_timer/waypointicon.png" alt="Waypoint Icon" width="32" height="32"></td><td><div class="col-sm-2 waypoint">' + e[t].waypoint + "</div></td></tr></table></div></div>";
        $("#table-worldboss").append(a)
    }
}

function sameTime(e, t)
{
    return e.lctime === t.lctime ? !0 : !1
}

function getTimezone()
{
    var e = (new Date).getTimezoneOffset();
    return -1 * e / 60
}

function getTimezoneOffsetStr()
{
    var e = getTimezone(),
        t = parseInt(e),
        n = 60 * (e - Math.floor(e)),
        s = "UTC";
    return s += (e >= 0 ? "+" : "") + t, s += 0 == n ? "" : ":" + n
}

function str2sec(e)
{
    var t = e.split(":");
    return 60 * +t[0] * 60 + 60 * +t[1]
}

function sec2str(e)
{
    var t = parseInt(e / 3600) % 24,
        n = parseInt(e / 60) % 60;
    return (10 > t ? "0" + t : t) + ":" + (10 > n ? "0" + n : n)
}

function sortByTime(e, t)
{
    var n = new Date,
        s = str2sec(n.getHours() + ":" + n.getMinutes()),
        a = 300,
        o = e.lcsec - s + a,
        i = t.lcsec - s + a;
    return 0 > o && (o += 86400), 0 > i && (i += 86400), i > o ? -1 : o > i ? 1 : 0
}

function getnowtime()
{
    var e = new Date,
        t = e.getHours(),
        n = e.getMinutes(),
        s = e.getSeconds();
    return (10 > t ? "0" + t : t) + ":" + (10 > n ? "0" + n : n) + ":" + (10 > s ? "0" + s : s)
}

function refreshall()
{
    var e = getCookie("lang") ? getCookie("lang") : "de";
    $(".table-content").remove(), $.getJSON("./assets/tool_timer/wbtime.json", function(t)
    {
        for (var n = 0, s = 0, a = new Array; t.worldboss[n];)
        {
            for (var o = 0; t.worldboss[n].uptime[o];)
            {
                sec = str2sec(t.worldboss[n].uptime[o]), lsec = sec + 3600 * getTimezone(), lsec >= 86400 && (lsec -= 86400), 0 > lsec && (lsec += 86400);
                var i = t.worldboss[n].name[e] ? t.worldboss[n].name[e] : t.worldboss[n].name.de,
                    l = t.worldboss[n].map[e] ? t.worldboss[n].map[e] : t.worldboss[n].map.de;
                a[s++] = {
                    id: t.worldboss[n].id,
                    name: i,
                    map: l,
                    uptime: t.worldboss[n].uptime[o],
                    upsec: sec,
                    lctime: sec2str(lsec),
                    lcsec: lsec,
                    scale: t.worldboss[n].scale,
                    waypoint: t.worldboss[n].waypoint
                }, o++
            }
            n++
        }
        for (a.sort(sortByTime), n = 0; s > n; n++)
        {
            var r = wbdonecheck(a[n].id) ? " done" : "";
            0 == n && sameTime(a[n], a[n + 1]) ? (buildElement(a, n, !0, r), buildElement(a, n + 1, !0, wbdonecheck(a[n + 1].id) ? " done" : ""), n++) : 0 == n ? buildElement(a, n, !0, r) : buildElement(a, n, !1, r)
        }
    })
}

function getCookie(e)
{
    for (var t = e + "=", n = document.cookie.split(";"), s = 0; s < n.length; s++)
    {
        var a = n[s].trim();
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
    }
    return ""
}

function setCookie(e, t, n)
{
    document.cookie = e + "=" + t + "; expires=" + n + ";"
}

function wbdone(e)
{
    var t = getCookie("wbdone").split("/"),
        n = $.inArray(e, t);
    n > -1 ? t.splice(n, 1) : t.push(e), t.clean(""), e = t.join("/");
    var s = new Date,
        a = new Date;
    a.setUTCFullYear(s.getUTCFullYear()), a.setUTCMonth(s.getUTCMonth()), a.setUTCDate(s.getUTCDate() + 1), a.setUTCHours(0), a.setUTCMinutes(0), a.setUTCSeconds(0), setCookie("wbdone", e, a.toUTCString())
}

function wbdonecheck(e)
{
    var t = getCookie("wbdone").split("/"),
        n = $.inArray(e, t);
    return n > -1 ? !0 : !1
}

function TTSi(e)
{
    var t, n;
    t = document.getElementsByTagName("head")[0], n = document.createElement("iframe"), n.src = "http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=" + escape(e), t.appendChild(n)
}

function TTS5(e)
{
    var t = new Audio;
    t.src = "http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=" + escape(e), t.autoplay = !0, console.log(t)
}

function TTS(e)
{
    var t = new SpeechSynthesisUtterance(e);
    window.speechSynthesis.speak(t)
}

function getLang(e)
{
    $.getJSON("./assets/tool_timer/lang.json", function(t)
    {
        for (var n in t[e])
            if ("lang-name" != n)
            {
                var s = t[e][n];
                "object" == typeof t[e][n] && (s = t[e][n].join("")), $("#" + n).html(s)
            }
    })
}

function refreshlang()
{
    var e = getCookie("lang");
    $.getJSON("./assets/tool_timer/lang.json", function(t)
    {
        for (var n in t) $("#lang-select").append(n == e ? $("<option>").text(t[n]["lang-name"]).attr("value", n).attr("selected", !0) : $("<option>").text(t[n]["lang-name"]).attr("value", n))
    }), getLang(e ? e : "de")
}
Array.prototype.clean = function(e)
{
    for (var t = 0; t < this.length; t++) this[t] == e && (this.splice(t, 1), t--);
    return this
}, $(document).ready(function()
{
    "dark" === getURLParam("design") ? (changeCSS("darkTimer.css", 2), $("a.toggler").toggleClass("off")) : "bright" === getURLParam("design") ? changeCSS("brightTimer.css", 2) : changeCSS("brightTimer.css", 2), $("#nowtimezone").append(" (" + getTimezoneOffsetStr() + ")"), refreshlang(), refreshall(), setInterval(function()
    {
        $("#nowtime").html(getnowtime());
        var e = new Date,
            t = e.getSeconds();
        0 == t && refreshall()
    }, 1e3), $("#lang-select").change(function()
    {
        getLang($("#lang-select option:selected").val());
        var e = new Date,
            t = new Date;
        t.setFullYear(e.getFullYear() + 10), setCookie("lang", $("#lang-select option:selected").val(), t), refreshall()
    }), $(document).on("click", ".waypoint:not(:has(input))", function()
    {
        var e = this,
            t = $("<input class='chatlink' type='text' value='" + $(e).text() + "' />");
        $(e).html(t), t.one("focusout", function()
        {
            $(e).html($(this).val())
        }).focus().select()
    }), $(document).on("click", ".wbframe", function()
    {
        var e = $(this).children("span.wbid").html();
        wbdone(e), $("." + e + ">.wbframe").toggleClass("done")
    }), $("a.toggler").click(function()
    {
        $(this).toggleClass("off");
        var e = $(this).attr("class");
        return "toggler" == e ? (window.location.href = "http://tools.guildnews.de/timer/?design=dark", !1) : (window.location.href = "http://tools.guildnews.de/timer/?design=bright", !1)
    }), $(document).on("mouseenter", ".table-content", function()
    {
        $("." + $(this).children(".wbframe").children(".wbid").html()).addClass("row-highlight")
    }), $(document).on("mouseleave", ".table-content", function()
    {
        $("." + $(this).children(".wbframe").children(".wbid").html()).removeClass("row-highlight")
    })
});
