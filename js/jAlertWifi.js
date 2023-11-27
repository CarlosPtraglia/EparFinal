

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var style = document.createElement('link');
style.href = "css/jAlertWifi.css";
style.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(style);



function alertWifi($txt, $hasTimer, $countTimer, $srcImg, $fontSize, $paginaAbrir) {
    let $panelInfo = $(`<div></div>`).addClass("panelInfo");
    let $contentPanel = $(`<div></div>`).addClass("contentPanel");
    $($panelInfo).append($contentPanel);

  
    $txtPanelInfo = ($hasTimer)?$("<p></p>").html($countTimer):$("<p></p>").html($txt);
    $($txtPanelInfo).css("font-size",`${$fontSize}px`);
    $($contentPanel).append($txtPanelInfo);

  
    if (!$hasTimer) {

        var btn = document.createElement("button");
        btn.innerHTML = "Fechar";
        btn.setAttribute("class","button");
    
        if ($paginaAbrir != "") btn.addEventListener("click",() => window.open($paginaAbrir,"_self"));
        else btn.addEventListener("click",() => closeAlertWifi($panelInfo));
        $($contentPanel).append(btn);
    }

 
    $("body").append($panelInfo);
    $($panelInfo).hide(0);
    $($panelInfo).slideDown(500);
    
 
    if ($hasTimer) showChronoAlertWifi($panelInfo, $countTimer);
}

function closeAlertWifi($id) {
    $($id).slideUp(300, function() {$($id).remove()});
}


function showChronoAlertWifi($panelInfo, $countTimer) {
    $($panelInfo).children("div").children("p").text($countTimer);
    if ($countTimer > 0) setTimeout(showChronoAlertWifi, 1000, $panelInfo, --$countTimer);
    else closeAlertWifi($panelInfo);
}
