
var index=0

function slideShow() {
    
    document.getElementById('sliderimage').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('sliderimage').src = config.background[index];
        document.getElementById('sliderimage').className = "";
    },config.fadespeed*1000);
    
    index++;
    if (index == config.background.length) { index = 0; }
    setTimeout(slideShow, (config.backgroundtimer*1000));
}
window.onload = function(){
    slideShow()
}


