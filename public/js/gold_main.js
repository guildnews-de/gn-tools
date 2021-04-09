(()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=n.length,a=window.console=window.console||{};o--;)a[e=n[o]]||(a[e]=t)}(),function(t){t.save=function(n,o){if(n){o||(o="log.json"),"object"===e(n)&&(n=JSON.stringify(n,void 0,4));var a=new Blob([n],{type:"text/json"}),i=document.createEvent("MouseEvents"),l=document.createElement("a");l.download=o,l.href=window.URL.createObjectURL(a),l.dataset.downloadurl=["text/json",l.download,l.href].join(":"),i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),l.dispatchEvent(i)}else t.error("Console.save: No data")}}(console)})(),function(){var e,t,n,o,a,i,l=200,r=new Audio("/assets/tool_gold/ding.mp3"),c=!0,s=0,u=1,d="",h=0,p=0,m=0,g=0,f=0,v=0,y={},w={},I={},b={},S={},k=0,O=0,N=[];Highcharts.setOptions({global:{useUTC:!1}});var D=!1,E={4:1,2:2,23:3,3:4,18:5,15:6,7:7,24:8,16:9,25:10,27:11,19:12,22:13,20:14,28:15,32:16,30:17,31:18,5:19,9:20,11:21,10:22,13:23,12:24,14:25,6:26,26:27,29:28},T=[],P=[];function A(){var l;e=Date.now(),t=Date.now(),n=0,y={},w={},I={},k=0,O=0,s=0,c=!0,$("#gridNew, #gridOld").html(""),$("#newItems .none, #oldItems .none").show(),$("#totalNew, #totalOld").hide(),$("#startOver, #resume").hide(),$("#stop").show(),$("#startTime").html((new Date).toLocaleString()),$("#currentTime").html((new Date).toLocaleString()),l=$("#chart").highcharts("StockChart",{chart:{animation:Highcharts.svg,marginLeft:110,marginRight:110,height:350},plotOptions:{series:{dataGrouping:{groupPixelWidth:1},marker:{enabled:null,radius:3},states:{hover:{enabled:!1}}}},series:[{name:"Gold pro Stunde",data:[[(new Date).getTime(),0]],yAxis:0},{name:"Gesamtes erhaltenes Gold",data:[[(new Date).getTime(),0]],yAxis:1}],title:{text:"Gold über Zeit"},xAxis:{tickPixelInterval:150},yAxis:[{labels:{useHTML:!0,formatter:function(){return'<span style="white-space: nowrap; color: #7CB5EC;">'+K(this.value,!1)+"</span>"}},opposite:!1},{labels:{align:"right",x:95,useHTML:!0,formatter:function(){return'<span style="white-space: nowrap; color: #434348;">'+K(this.value,!1)+"</span>"}},opposite:!0}],tooltip:{hideDelay:0,animation:!1,formatter:function(){return"<b>"+this.points[0].series.name+"</b><br/>"+Highcharts.dateFormat("%d-%m-%Y %H:%M:%S",this.x)+'<br/><div style="white-space: nowrap">'+K(this.y)+"</div>"},useHTML:!0},exporting:{enabled:!1},legend:{enabled:!0},navigator:{enabled:!1},rangeSelector:{enabled:!1},scrollbar:{enabled:!1}}),o=l.highcharts().series[0],a=l.highcharts().series[1],$.getJSON("https://api.guildwars2.com/v2/currencies?ids=2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32&lang=de").done((function(e){var t=[];e.sort((function(e,t){return E[e.id]>E[t.id]?1:E[e.id]<E[t.id]?-1:0})),$("#currencies").html('<table class="table table-hover table-striped table-sm"><tr><th><input type="checkbox" id="checkAllCurrencies"></th><th>Währung</th><th>Initial</th><th>Momentan</th><th>Differenz</th></tr></table>'),e.forEach((function(e){$("#currencies table").append('<tr data-currencyID="'+e.id+'"><td><input class="currencySelect form-check-inline" type="checkbox" value="'+e.id+'" id="currency-'+e.id+'"></td><td><label for="currency-'+e.id+'"><img width="25" height="25" src="'+e.icon+'" alt="'+e.name+'"> '+e.name+'</label></td><td class="initialCurrencyValue">0</td><td class="currentCurrencyValue">0</td><td class="currencyDifference">0</td></tr>'),t.push({id:"currency-"+e.id,name:e.name,data:[],visible:!1})})),null===localStorage.getItem("currencies")&&localStorage.setItem("currencies",$.map($(".currencySelect"),(function(e){return"#"+$(e).attr("id")})).join(", ")),$(""+localStorage.getItem("currencies")).prop("checked",!0).each((function(e,n){t.forEach((function(e){e.id==$(n).attr("id")&&(e.visible=!0)}))})),i=$("#currenciesGraph").highcharts("StockChart",{chart:{animation:Highcharts.svg,marginRight:10,height:500},plotOptions:{series:{dataGrouping:{groupPixelWidth:1},marker:{enabled:null,radius:3},states:{hover:{enabled:!1}}}},series:t,title:{text:"Wärhungszuwachs über Zeit"},xAxis:{tickPixelInterval:150},yAxis:{opposite:!1},tooltip:{hideDelay:0,animation:!1,headerFormat:"<small>{point.key}</small><table>",pointFormat:'<tr><td style="color: {series.color}">{series.name}: </td><td style="text-align: right"><b>{point.y}</b></td></tr>',footerFormat:"</table>",useHTML:!0},exporting:{enabled:!1},legend:{enabled:!1},navigator:{enabled:!1},rangeSelector:{enabled:!1},scrollbar:{enabled:!1}})})).fail(x),$.getJSON("https://api.guildwars2.com/v2/account/wallet?access_token="+d).done((function(e){h=e[0].value,m=e[0].value})).then((function(){return $.getJSON("https://api.guildwars2.com/v2/commerce/delivery?access_token="+d).done((function(e){p=e.coins,g=e.coins,$("#initialGold").html(G(h,p)),$("#currentGold").html(G(m,g))}))})).then((function(){j(!0),_(!0),C()})).fail(x)}function x(e){var t=JSON.parse(e.responseText),n=t.text?t.text:t.error;400===e.status||503===e.status?$("#warning").html("<b>Oops!</b> Die Guild Wars 2 API funktioniert momentan nicht ...# "+n+' # <span class="close">Schließen</span>'):403===e.status?$("#warning").html("<b>Oops!</b> Dein API Schlüssel scheint nicht gültig zu sein. Bitte überprüfe, ob du alle benötigten Berechtigungen gesetzt hast. # "+n+' # <span class="close">Schließen</span>'):404===e.status?$("#warning").html("<b>Oops!</b> A call to an API endpoint was made to an invalid endpoint or to one with an invalid item ID. # "+n+' # <span class="close">Schließen</span>'):408===e.status?$("#warning").html("<b>Oops!</b> Ein API Aufruf hat zu lange gebraucht. Bitte überprüfe deine Internet-Verbindung. # "+n+' # <span class="close">Schließen</span>'):$("#warning").html("<b>Oops!</b> Irgenwas lief schief. # "+n+' # <span class="close">Schließen</span>'),$("#warning").show().position({my:"left bottom",at:"left bottom",of:window})}function C(){if(c){var e,o;remaining=180-s,e=(e=remaining/60|0)<10?"0"+e:e,o=(o=remaining%60|0)<10?"0"+o:o,$("#countdown").html("Nächste Aktualisierung: "+e+":"+o),_(!1),180==++s&&(s=0,j(!1));var a=Date.now()-t-n;n+=1e3,u+=1e3,window.setTimeout(C,1e3-a)}}function _(t){if(!D){var n,a,i=m+g-(h+p);n="elapsed"===localStorage.getItem("baseTime")?36e5/u:36e5/(Date.now()-e),$("#totalNew").html("Gains ("+("lowestSeller"===localStorage.getItem("valueFrom")?"listing":"sell instantly")+', before fees): <span class="price">'+K(k)+'</span><br>Listing and selling fees (15%): <span class="price">'+K(parseInt(.15*k))+'</span><br>Result: <span class="price">'+K(k-parseInt(.15*k))+"</span>"),$("#totalOld").html("Losses ("+("lowestSeller"===localStorage.getItem("valueFrom")?"listing":"sell instantly")+', before fees): <span class="price">'+K(O)+'</span><br>Listing and selling fees (15%): <span class="price">'+K(parseInt(.15*O))+'</span><br>Result: <span class="price">'+K(O-parseInt(.15*O))+"</span>"),(a=parseInt((k-parseInt(.15*k)-(O-parseInt(.15*O))+i)*n))>0?($("#summary").addClass("positive").removeClass("negative"),$("#main").addClass("overlayPositive").removeClass("overlayNegative")):a<0?($("#summary").addClass("negative").removeClass("positive"),$("#main").addClass("overlayNegative").removeClass("overlayPositive")):($("#summary").removeClass("positive negative"),$("#main").removeClass("overlayPositive overlayNegative")),t&&($("#overallGoldDifference").html(K(i)),$("#currentGold").html(G(m,g)),$("#overallGains").html(K(k)),$("#overallFees").html(K(parseInt(.15*k))),$("#overallLosses").html(K(O-parseInt(.15*O))),$("#overallResult").html(K(k-parseInt(.15*k)-(O-parseInt(.15*O))+i))),$("#overallAverage").html(K(a)),isNaN(a)||o.addPoint([(new Date).getTime(),a],!0,!1)}}function j(e){I={},f=0,v=0,$.when(function(e){var t=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/account/inventory?access_token="+d).done((function(n){n.forEach((function(t){null!==t&&t.count&&(e?void 0===y[t.id]?y[t.id]={count:t.count}:y[t.id].count+=t.count:void 0===I[t.id]?I[t.id]={count:t.count}:I[t.id].count+=t.count)})),t.resolve()})).fail(x),t}(e),function(e){var t=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/account/bank?access_token="+d).done((function(n){n.forEach((function(t){null!==t&&t.count&&(e?void 0===y[t.id]?y[t.id]={count:t.count}:y[t.id].count+=t.count:void 0===I[t.id]?I[t.id]={count:t.count}:I[t.id].count+=t.count)})),t.resolve()})).fail(x),t}(e),function(e){var t=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/account/materials?access_token="+d).done((function(n){n.forEach((function(t){null!==t&&t.count&&(e?void 0===y[t.id]?y[t.id]={count:t.count}:y[t.id].count+=t.count:void 0===I[t.id]?I[t.id]={count:t.count}:I[t.id].count+=t.count)})),t.resolve()})).fail(x),t}(e),function(e){var t=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/characters?page=0&access_token="+d).done((function(n){n.forEach((function(t){t.equipment.forEach((function(t){null!==t&&(e?void 0===y[t.id]?y[t.id]={count:1}:y[t.id].count+=1:void 0===I[t.id]?I[t.id]={count:1}:I[t.id].count+=1)})),t.bags.forEach((function(t){null!==t&&t.inventory.forEach((function(t){null!==t&&t.count&&(e?void 0===y[t.id]?y[t.id]={count:t.count}:y[t.id].count+=t.count:void 0===I[t.id]?I[t.id]={count:t.count}:I[t.id].count+=t.count)}))}))})),t.resolve()})).fail(x),t}(e),function(e){var t=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/account/wallet?access_token="+d).done((function(n){f=n[0].value,n.shift(),e?(T=$.map([2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32],(function(e){var t={id:e,value:0};return n.forEach((function(n){n.id===e&&(t.value=n.value,$("[data-currencyID="+n.id+"] .initialCurrencyValue").html(n.value.format()))})),t})),P=T):(P=$.map([2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32],(function(e){var t={id:e,value:0};return n.forEach((function(n){n.id===e&&(t.value=n.value)})),t})),$("#currentTime").html((new Date).toLocaleString())),t.resolve()})).fail(x),t}(e)).then((function(){return function(e){var t=$.Deferred(),n=$.Deferred(),o=$.Deferred(),a=$.Deferred();return $.getJSON("https://api.guildwars2.com/v2/commerce/transactions/current/buys?access_token="+d).done((function(t){t.forEach((function(t){null!==t&&t.quantity&&(e?void 0===y[t.item_id]?y[t.item_id]={count:t.quantity}:y[t.item_id].count+=t.quantity:void 0===I[t.item_id]?I[t.item_id]={count:t.quantity}:I[t.item_id].count+=t.quantity)})),n.resolve()})).fail(x),$.getJSON("https://api.guildwars2.com/v2/commerce/transactions/current/sells?access_token="+d).done((function(t){t.forEach((function(t){null!==t&&t.quantity&&(e?void 0===y[t.item_id]?y[t.item_id]={count:t.quantity}:y[t.item_id].count+=t.quantity:void 0===I[t.item_id]?I[t.item_id]={count:t.quantity}:I[t.item_id].count+=t.quantity)})),o.resolve()})).fail(x),$.getJSON("https://api.guildwars2.com/v2/commerce/delivery?access_token="+d).done((function(t){v=t.coins,t.items.forEach((function(t){null!==t&&t.quantity&&(e?void 0===y[t.item_id]?y[t.item_id]={count:t.quantity}:y[t.item_id].count+=t.quantity:void 0===I[t.item_id]?I[t.item_id]={count:t.quantity}:I[t.item_id].count+=t.quantity)})),a.resolve()})).fail(x),$.when(n,o,a).then((function(){t.resolve()})),t}(e)})).then((function(){m=f,g=v,w=I,b={},S={};var t=Date.now();e?P.forEach((function(e,n){var o=$("[data-currencyID="+e.id+"]"),a=$.grep(T,(function(t){return t.id==e.id}))[0];o.find(".currentCurrencyValue").html(e.value.format()),o.find(".currencyDifference").html((e.value-a.value>0?"+":"")+(e.value-a.value).format()),i.highcharts().get("currency-"+e.id).addPoint([t,e.value-a.value],!0,!1)})):(Object.keys(w).forEach((function(e){void 0===y[e]?b[e]=w[e]:y[e].count<w[e].count&&(b[e]={count:w[e].count-y[e].count})})),Object.keys(y).forEach((function(e){void 0===w[e]?S[e]=y[e]:y[e].count>w[e].count&&(S[e]={count:y[e].count-w[e].count})})),D=!0,function(){var e,t=[],n=[],o=Date.now();$("#currentGold").html(G(m,g)),$("#currencies tr").removeClass("currencyPositive currencyNegative"),$("#gridNew, #gridOld").html(""),$("#totalNew, #totalOld").hide(),$("#spinnerNew, #spinnerOld").show(),k=0,O=0,P.forEach((function(e,t){var n=$("[data-currencyID="+e.id+"]"),a=$.grep(T,(function(t){return t.id==e.id}))[0];n.find(".currentCurrencyValue").html(e.value.format()),n.find(".currencyDifference").html((e.value-a.value>0?"+":"")+(e.value-a.value).format()),e.value-a.value>0?n.addClass("currencyPositive",l):e.value-a.value<0&&n.addClass("currencyNegative",l),i.highcharts().get("currency-"+e.id).addPoint([o,e.value-a.value],!0,!1)})),Object.keys(b).length>0?Object.keys(b).forEach((function(o,a){var i,l;n.push(o),200!==n.length&&a!==Object.keys(b).length-1||(i=n,l=$.Deferred(),t.push(l),$.getJSON("https://api.guildwars2.com/v2/items?lang=ede&ids="+i.join(",")).done((function(t){$.getJSON("https://api.guildwars2.com/v2/commerce/prices?ids="+i.join(",")).done((function(n){$("#spinnerNew").hide(),t.forEach((function(t){"Junk"===t.rarity?B("new",t.id,t.name,t.icon,b[t.id].count,t.vendor_value,t.vendor_value,t.rarity,t.type):(e=!1,n.forEach((function(n){n.id===t.id&&(e=!0,B("new",t.id,t.name,t.icon,b[t.id].count,n.sells&&n.sells.quantity>0?n.sells.unit_price:null,n.buys&&n.buys.quantity>0?n.buys.unit_price:null,t.rarity,t.type))})),e||B("new",t.id,t.name,t.icon,b[t.id].count,null,null,t.rarity,t.type))})),l.resolve()})).fail((function(e){404!==e.status?x(e):($("#spinnerNew").hide(),t.forEach((function(e){B("new",e.id,e.name,e.icon,b[e.id].count,null,null,e.rarity,e.type)})),l.resolve())}))})).fail(x),n=[])})):($("#newItems .none").show(),$("#totalNew").hide(),$("#spinnerNew").hide()),Object.keys(S).length>0?Object.keys(S).forEach((function(o,a){var i,l;n.push(o),200!==n.length&&a!==Object.keys(S).length-1||(i=n,l=$.Deferred(),t.push(l),$.getJSON("https://api.guildwars2.com/v2/items?lang=de&ids="+i.join(",")).done((function(t){$.getJSON("https://api.guildwars2.com/v2/commerce/prices?ids="+i.join(",")).done((function(n){$("#spinnerOld").hide(),t.forEach((function(t){"Junk"===t.rarity?B("old",t.id,t.name,t.icon,S[t.id].count,t.vendor_value,t.vendor_value,t.rarity,t.type):(e=!1,n.forEach((function(n){n.id===t.id&&(e=!0,B("old",t.id,t.name,t.icon,S[t.id].count,n.sells&&n.sells.quantity>0?n.sells.unit_price:null,n.buys&&n.buys.quantity>0?n.buys.unit_price:null,t.rarity,t.type))})),e||B("old",t.id,t.name,t.icon,S[t.id].count,null,null,t.rarity,t.type))})),l.resolve()})).fail((function(e){404!==e.status?x(e):($("#spinnerOld").hide(),t.forEach((function(e){B("old",e.id,e.name,e.icon,S[e.id].count,null,null,e.rarity,e.type)})),l.resolve())}))})),n=[])})):($("#gridOld .none").show(),$("#totalOld").hide(),$("#spinnerOld").hide()),$.when.apply($,t).then((function(){var e;F(localStorage.getItem("sortBy")),0===$("#gridNew .item:visible").length?($("#newItems .none").show(),$("#totalNew").hide()):($("#newItems .none").hide(),$("#totalNew").show()),0===$("#gridOld .item:visible").length?($("#oldItems .none").show(),$("#totalOld").hide()):($("#oldItems .none").hide(),$("#totalOld").show()),D=!1,_(!0),e=k-parseInt(.15*k)-(O-parseInt(.15*O))+(m+g-(h+p)),a.addPoint([(new Date).getTime(),e],!0,!1)}))}(),"true"===localStorage.getItem("playSound")&&r.play())}))}function V(){D=!0,k=0,O=0,"true"===localStorage.getItem("ignoreHidden")?"lowestSeller"===localStorage.getItem("valueFrom")?(Object.keys(b).forEach((function(e){N.indexOf(b[e].type)>=0&&(k+=b[e].count*b[e].sellValue)})),Object.keys(S).forEach((function(e){N.indexOf(S[e].type)>=0&&(O+=S[e].count*S[e].sellValue)}))):(Object.keys(b).forEach((function(e){N.indexOf(b[e].type)>=0&&(k+=b[e].count*b[e].buyValue)})),Object.keys(S).forEach((function(e){N.indexOf(S[e].type)>=0&&(O+=S[e].count*S[e].buyValue)}))):"lowestSeller"===localStorage.getItem("valueFrom")?(Object.keys(b).forEach((function(e){k+=b[e].count*b[e].sellValue})),Object.keys(S).forEach((function(e){O+=S[e].count*S[e].sellValue}))):(Object.keys(b).forEach((function(e){k+=b[e].count*b[e].buyValue})),Object.keys(S).forEach((function(e){O+=S[e].count*S[e].buyValue}))),D=!1}function B(e,t,n,o,a,i,r,c,s){if(null!==a){var u,d="lowestSeller"===localStorage.getItem("valueFrom")?i:r,h=null!==i?i*a:0,p=null!==r?r*a:0;switch(c){case"Junk":u=1;break;case"Basic":u=2;break;case"Fine":u=3;break;case"Masterwork":u=4;break;case"Rare":u=5;break;case"Exotic":u=6;break;case"Ascended":u=7;break;case"Legendary":u=8}var m=$('<div class="item '+c+" "+s+'" style="display:none;"data-id="'+t+'" data-type="'+s+'"data-rarity="'+u+'" data-name="'+n+'" data-sellvalue="'+h+'" data-buyvalue="'+p+'" ><table><tr><td class="icon"></td><td><div class="description"'+($("#toggleDetails").prop("checked")?"":'style="display:none;"')+"></div></td></tr></table></div>");m.find(".icon").css("background-image","url("+o+")").append('<span class="count">'+a+"</span>"),m.find(".description").html('<div class="itemName"><a title="View item on the wiki (opens in a new tab)" href="https://wiki-de.guildwars2.com/index.php?search='+encodeURIComponent(n)+'" target="_blank">'+n+"</a></div>"),null!==i&&m.find(".description").append('<div class="itemSellValue" '+("lowestSeller"===localStorage.getItem("valueFrom")?"":'style="display: none;"')+">Stückpreis : "+K(i)+"<br>Gesamtwert : "+K(h)+"</div>"),null!==r&&m.find(".description").append('<div class="itemBuyValue" '+("lowestSeller"===localStorage.getItem("valueFrom")?'style="display: none;"':"")+">Stückpreis : "+K(r)+"<br>Gesamtwert : "+K(p)+"</div>"),"new"===e?($("#gridNew").append(m),b[t].type=s,b[t].rarity=c,b[t].sellValue=i,b[t].buyValue=r):($("#gridOld").append(m),S[t].type=s,S[t].rarity=c,S[t].sellValue=i,S[t].buyValue=r),N.indexOf(s)>=0&&m.fadeIn(l),(N.indexOf(s)>=0||"false"===localStorage.getItem("ignoreHidden"))&&("new"===e?k+=a*d:O+=a*d)}}function F(e){var t=$("#gridNew"),n=$("#gridOld"),o=$("#gridNew .item"),a=$("#gridOld .item");"rarity"===e?(o.sort((function(e,t){var n=parseInt($(e).data("rarity"),10),o=parseInt($(t).data("rarity"),10),a=$(e).data("name"),i=$(t).data("name");return n>o?1:o>n?-1:a.localeCompare(i)})),o.detach().appendTo(t),a.sort((function(e,t){var n=parseInt($(e).data("rarity"),10),o=parseInt($(t).data("rarity"),10),a=$(e).data("name"),i=$(t).data("name");return n>o?1:o>n?-1:a.localeCompare(i)})),a.detach().appendTo(n)):(o.sort((function(e,t){var n,o;"lowestSeller"===localStorage.getItem("valueFrom")?(n=parseInt($(e).data("sellvalue"),10),o=parseInt($(t).data("sellvalue"),10)):(n=parseInt($(e).data("buyvalue"),10),o=parseInt($(t).data("buyvalue"),10));var a=$(e).data("name"),i=$(t).data("name");return n>o?-1:o>n?1:a.localeCompare(i)})),o.detach().appendTo(t),a.sort((function(e,t){var n,o;"lowestSeller"===localStorage.getItem("valueFrom")?(n=parseInt($(e).data("sellvalue"),10),o=parseInt($(t).data("sellvalue"),10)):(n=parseInt($(e).data("buyvalue"),10),o=parseInt($(t).data("buyvalue"),10));var a=$(e).data("name"),i=$(t).data("name");return n>o?-1:o>n?1:a.localeCompare(i)})),a.detach().appendTo(n))}function K(e,t){var n,o,a=!1;return isNaN(e)?"Value error":(e<0&&(a=!0),n=(e=Math.abs(e))%100,o=e/100%100,(a?"- ":"")+parseInt(e/1e4,10)+' <i class="goldIcon"></i> '+parseInt(o,10).toString().paddingLeft("00")+' <i class="silverIcon"></i> '+(0==t?"":parseInt(n,10).toString().paddingLeft("00")+' <i class="copperIcon"></i>'))}function G(e,t){return K(e+t)+'<span class="tpDetail"><span class="info"></span><span class="hiddenGold">In deiner Geldbörse:<br>'+K(e)+"<br>Im Handelsposten wartend:<br>"+K(t)+"</span></span>"}String.prototype.paddingLeft=function(e){return String(e+this).slice(-e.length)},Number.prototype.format=function(e,t){var n="\\d(?=(\\d{"+(t||3)+"})+"+(e>0?"\\.":"$")+")";return this.toFixed(Math.max(0,~~e)).replace(new RegExp(n,"g"),"$&,")},null===localStorage.getItem("saveAPIKey")&&localStorage.setItem("saveAPIKey",!0),$("#saveAPIKey").prop("checked","true"===localStorage.getItem("saveAPIKey")),"true"===localStorage.getItem("saveAPIKey")&&$("#apiKey").val(localStorage.getItem("APIKey")),function(){var e,t,n=decodeURIComponent(window.location.search.substring(1)).split("&");for(t=0;t<n.length;t++)"key"===(e=n[t].split("="))[0].toLowerCase()&&($("#apiKey").val(e[1]),"true"===localStorage.getItem("saveAPIKey")&&localStorage.setItem("saveAPIKey",e[1]))}(),null===localStorage.getItem("showDetails")&&localStorage.setItem("showDetails",!0),$("#toggleDetails").prop("checked","true"===localStorage.getItem("showDetails")),null===localStorage.getItem("playSound")&&localStorage.setItem("playSound",!1),$("#toggleSound").prop("checked","true"===localStorage.getItem("playSound")),null===localStorage.getItem("sortBy")&&localStorage.setItem("sortBy","rarity"),"value"===localStorage.getItem("sortBy")?$("#sortByValue").prop("checked",!0):$("#sortByRarity").prop("checked",!0),null===localStorage.getItem("valueFrom")&&localStorage.setItem("valueFrom","lowestSeller"),"highestBuyer"===localStorage.getItem("valueFrom")?$("#highestBuyer").prop("checked",!0):$("#lowestSeller").prop("checked",!0),null===localStorage.getItem("baseTime")&&localStorage.setItem("baseTime","sinceStart"),"elapsed"===localStorage.getItem("baseTime")?$("#elapsed").prop("checked",!0):$("#sinceStart").prop("checked",!0),null===localStorage.getItem("itemTypes")&&localStorage.setItem("itemTypes",$.map($(".itemType"),(function(e){return"#"+$(e).attr("id")})).join(", ")),$(""+localStorage.getItem("itemTypes")).prop("checked",!0).each((function(){N.push($(this).data("type"))})),null===localStorage.getItem("ignoreHidden")&&localStorage.setItem("ignoreHidden",!1),$("#ignoreHidden").prop("checked","true"===localStorage.getItem("ignoreHidden")),$("#apiKey").val().length>0&&(d=$("#apiKey").val(),localStorage.setItem("APIKey",d),$("#intro").hide(),$("#main, #menu").show(),A()),$("#saveAPIKey").on("change",(function(){localStorage.setItem("saveAPIKey",$(this).prop("checked"))})),$("#continueIntro").on("click",(function(){0===$("#apiKey").val().length?alert("Please enter your API key!"):(d=$("#apiKey").val(),localStorage.setItem("APIKey",d),$("#intro").hide(),$("#main, #menu").show(),A())})),$("#about").on("click",(function(){$("#aboutPopup").is(":visible")?($("#aboutPopup").hide(l),$("#popupOverlay").hide()):($("#aboutPopup").show().position({my:"center center",at:"center center",of:window,collision:"flipfit"}).hide().toggle(l),$("#popupOverlay").show())})),$("#settings").on("click",(function(){$("#settingsPopup").is(":visible")?($("#settingsPopup").hide(l),$("#popupOverlay").hide()):($("#settingsPopup").show().position({my:"center center",at:"center center",of:window,collision:"flipfit"}).hide().toggle(l),$("#popupOverlay").show())})),$("html").on("click",(function(e){var t=$(e.target);t.closest("#settingsPopup, #settings").length||($("#settingsPopup").hide(l),t.closest("#aboutPopup, #about").length||$("#popupOverlay").hide()),t.closest("#aboutPopup, #about").length||($("#aboutPopup").hide(l),t.closest("#settingsPopup, #settings").length||$("#popupOverlay").hide())})),$("#stop").on("click",(function(){$(this).hide(),$("#countdown").html(""),$("#startOver, #resume").show(),c=!1})),$("#startOver").on("click",(function(){A()})),$("#resume").on("click",(function(){$(this).hide(),$("#startOver").hide(),$("#stop").show(),t=Date.now(),n=0,s=0,c=!0,C()})),$("#summary").on("mouseover",".tpDetail .info",(function(){$(this).next().show()})).on("mouseout",".tpDetail .info",(function(){$(this).next().hide()})),$("#toggleDetails").on("change",(function(){$(".description").toggle(l),localStorage.setItem("showDetails",$(this).prop("checked"))})),$("#toggleSound").on("change",(function(){localStorage.setItem("playSound",$(this).prop("checked"))})),$("[name=sortBy]").on("change",(function(){F($(this).val()),localStorage.setItem("sortBy",$(this).val())})),$("[name=valueFrom]").on("change",(function(){localStorage.setItem("valueFrom",$(this).val()),$(".itemSellValue, .itemBuyValue").toggle(),V(),F(localStorage.getItem("sortBy"))})),$("[name=baseTime]").on("change",(function(){localStorage.setItem("baseTime",$(this).val())})),$("#checkAllTypes").on("change",(function(){$(this).prop("checked")?($(".itemType:not(:checked)").prop("checked",!0),$(".item").show(l,(function(){0===$("#gridNew .item:visible").length?($("#newItems .none").show(),$("#totalNew").hide()):($("#newItems .none").hide(),$("#totalNew").show()),0===$("#gridOld .item:visible").length?($("#oldItems .none").show(),$("#totalOld").hide()):($("#oldItems .none").hide(),$("#totalOld").show())}))):($(".itemType:checked").prop("checked",!1),$(".item").hide(l,(function(){$("#newItems .none").show(),$("#totalNew").hide(),$("#oldItems .none").show(),$("#totalOld").hide()}))),localStorage.setItem("itemTypes",$.map($(".itemType:checked"),(function(e){return"#"+$(e).attr("id")})).join(", ")),N=[],$(".itemType:checked").each((function(){N.push($(this).data("type"))})),V()})),$(".itemType").on("change",(function(){$(this).prop("checked")?$(".itemType").length===$(".itemType:checked").length&&$("#checkAllTypes").prop("checked",!0):$("#checkAllTypes").prop("checked",!1),localStorage.setItem("itemTypes",$.map($(".itemType:checked"),(function(e){return"#"+$(e).attr("id")})).join(", ")),N=[],$(".itemType:checked").each((function(){N.push($(this).data("type"))})),$("."+$(this).data("type")).toggle(l,(function(){0===$("#gridNew .item:visible").length?($("#newItems .none").show(),$("#totalNew").hide()):($("#newItems .none").hide(),$("#totalNew").show()),0===$("#gridOld .item:visible").length?($("#oldItems .none").show(),$("#totalOld").hide()):($("#oldItems .none").hide(),$("#totalOld").show())})),V()})),$("#ignoreHidden").on("change",(function(){localStorage.setItem("ignoreHidden",$(this).prop("checked")),V()})),$("#restoreDefaults").on("click",(function(){localStorage.setItem("saveAPIKey",!0),localStorage.setItem("showDetails",!0),localStorage.setItem("playSound",!1),localStorage.setItem("sortBy","rarity"),localStorage.setItem("valueFrom","lowestSeller"),localStorage.setItem("baseTime","sinceStart"),localStorage.setItem("itemTypes",$.map($(".itemType"),(function(e){return"#"+$(e).attr("id")})).join(", ")),N=[],$(".itemType").each((function(){N.push($(this).data("type"))})),localStorage.setItem("ignoreHidden",!1),$("#saveAPIKey").prop("checked",!0),$("#toggleDetails").prop("checked",!0),$("#toggleSound").prop("checked",!1),$("#sortByRarity").prop("checked",!0),$("#lowestSeller").prop("checked",!0),$("#sinceStart").prop("checked",!0),$(".itemType").prop("checked",!0),$("#checkAllTypes").prop("checked",!0),$("#ignoreHidden").prop("checked",!1),$(".description").show(l),$(".itemSellValue").show(),$(".itemBuyValue").hide(),$(".item").show(l,(function(){0===$("#gridNew .item:visible").length?($("#newItems .none").show(),$("#totalNew").hide()):($("#newItems .none").hide(),$("#totalNew").show()),0===$("#gridOld .item:visible").length?($("#oldItems .none").show(),$("#totalOld").hide()):($("#oldItems .none").hide(),$("#totalOld").show()),V(),F("rarity")}))})),$("#toggleSummary").on("click",(function(){$("#header").toggle(l)})),$("#toggleCurrencies").on("click",(function(){$("#currencies").toggle(l)})),$("#toggleNew").on("click",(function(){$("#newItems").toggle(l)})),$("#toggleOld").on("click",(function(){$("#oldItems").toggle(l)})),$("#currencies").on("change","#checkAllCurrencies",(function(){$(this).prop("checked")?i.highcharts().series.forEach((function(e){e.setVisible(!0,!1)})):i.highcharts().series.forEach((function(e){e.setVisible(!1,!1)})),i.highcharts().redraw(),$(".currencySelect").prop("checked",$(this).prop("checked")),localStorage.setItem("currencies",$.map($(".currencySelect:checked"),(function(e){return"#"+$(e).attr("id")})).join(", "))})),$("#currencies").on("change",".currencySelect",(function(){$(this).prop("checked")?i.highcharts().get("currency-"+$(this).val()).show():i.highcharts().get("currency-"+$(this).val()).hide(),$(this).prop("checked")?$(".currencySelect").length===$(".currencySelect:checked").length&&$("#checkAllCurrencies").prop("checked",!0):$("#checkAllCurrencies").prop("checked",!1),localStorage.setItem("currencies",$.map($(".currencySelect:checked"),(function(e){return"#"+$(e).attr("id")})).join(", "))})),$(".clearAPIKey").on("click",(function(){confirm("Bist du dir sicher deinen API Schlüssel zurückzusetzen?")&&($("#apiKey").val(""),localStorage.setItem("APIKey",""),alert("Dein API Schlüssel wurde zurückgesetzt!"))})),$("#warning").on("click",".close",(function(){$("#warning").hide(l)})),$("#newVersion").on("click",".close",(function(){$("#newVersion").hide(l),$(this).is(".first")})),$("#saveCurrentState").on("click",(function(){var t={startedOn:e,keepGoing:c,intervalCount:s,REFRESH_RATE:180,timeElapsed:n,token:d,initialGold:h,currentGold:m,newItems:b,oldItems:S,refreshID:void 0,gains:k,losses:O,itemTypes:N,updating:D,localStorage};console.save(t)}))}();