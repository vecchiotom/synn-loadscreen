var index = lib.rand(0, config.background.length);
var background = document.getElementById("background");

NextBackground();

if(config.staticBackground == false)
{
    setInterval(NextBackground, config.backgroundSpeed)
}


function NextBackground() 
{
    index = (index + 1) % config.background.length;

    lib.fadeInOut(600, "background", 0, 0.2);

    setTimeout(function()
    {
        background.setAttribute("src", config.background[index]);
    }, 600);
}




