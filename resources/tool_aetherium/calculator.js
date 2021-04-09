function init() {
    var e = "";
    switch (lang) {
        case "de":
            e = translation.de;
            break;
        case "fr":
            e = translation.fr;
            break;
        default:
            e = translation.en
    }
    var n = e.mining;
}

function calculate() {
    var e = parseInt($("#aetheriumGoal").val()),
        n = $("#aetheriumAtm").val(),
        t = null,
        a = !1;
    if (removeErrorClasses(), ("" === n || void 0 === n) && (n = 0), "number" == typeof n || "NaN" != typeof e) {
        if (e > n) {
            n = parseInt(n);
            var r = (e - n) * miningProduction * 1e3,
                i = new Date;
            t = new Date(i.getTime() + r), a = !0
        }
    } else t = null, console.error("Type of Input is not allowed! goal = " + e + "; atm = " + n);
    console.log(t), a ? showDateResult(t) : ("number" != typeof n && showErrorAtm(n), ("number" != typeof e || "" !== e) && showErrorGoal(e), n > e && "number" == typeof e && "number" == typeof n && showAtmBiggerGoalError(e, n))
}

function showDateResult(e) {
    var n = e.toLocaleString();
    $("#dateAtGoal").val(n);
    var t = (new Date).getTime();
    $("#timeTillGoal").val(msToReadableTime(e.getTime() - t))
}

function showErrorAtm(e) {
    $("#inputAtm").addClass("has-error has-feedback")
}

function showErrorGoal(e) {
    $("#inputGoal").addClass("has-error has-feedback")
}

function removeErrorClasses() {
    $("#inputGoal").removeClass("has-error has-feedback"), $("#inputAtm").removeClass("has-error has-feedback")
}

function miningChanged(e) {
    var n = e[e.selectedIndex].id;
    switch (n) {
        case "miningZero":
            miningProduction = 60;
            break;
        case "miningOne":
            miningProduction = 50;
            break;
        case "miningTwo":
            miningProduction = 40;
            break;
        case "miningThree":
            miningProduction = 30;
            break;
        case "miningFour":
            miningProduction = 25;
            break;
        case "miningFive":
            miningProduction = 20;
            break;
        case "miningSix":
            miningProduction = 15;
            break;
        default:
            miningProduction = 60, console.error("Unknown value for mining production")
    }
    $("#mPerAethValue").text(miningProduction), $("#aethPerHValue").text(3600 / miningProduction), $("#aethPerDValue").text(86400 / miningProduction)
}

function addLeadingZero(e) {
    return e > 0 && 10 > e ? "0" + e : e
}

function msToReadableTime(e) {
    var n = 864e5,
        t = 36e5,
        a = Math.floor(e / n),
        r = Math.floor((e - a * n) / t),
        i = Math.round((e - a * n - r * t) / 6e4),
        o = function(e) {
            return 10 > e ? "0" + e : e
        };
    return 60 === i && (r++, i = 0), 24 === r && (a++, r = 0), [a, o(r), o(i)].join(":")
}

function getURLParam(e) {
    var n = "",
        t = window.location.href;
    if (t.indexOf("?") > -1)
        for (var a = t.substr(t.indexOf("?")).toLowerCase(), r = a.split("&"), i = 0; i < r.length; i++)
            if (r[i].indexOf(e.toLowerCase() + "=") > -1) {
                var o = r[i].split("=");
                n = o[1];
                break
            } return unescape(n)
}
var lang = "",
    translation = "",
    miningProduction = 60,
    time = {
        days: 0,
        hours: 0,
        min: 0
    };
$(document).ready(function() {
    switch (lang = getURLParam("lang"), lang.length > 2 && (lang = lang.substring(0, 2)), lang) {
        case "fr":
            break;
        case "de":
            break;
        case "en":
            break;
        default:
            var e = navigator.language || navigator.userLanguage;
            "de" !== e && "fr" !== e ? lang = "en" : ("de" === e || "fr" === e) && (lang = e)
    }
    $.getJSON("/assets/tool_aetherium/lang.json", function(e) {
        translation = e, init()
    }), $("#bCalculate").click(function(e) {
        calculate()
    }), $("#bEn").click(function(e) {
        lang = "en", init()
    }), $("#bGer").click(function(e) {
        lang = "de", init()
    }), $("#bFr").click(function(e) {
        lang = "fr", init()
    })
});
