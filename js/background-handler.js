var index = lib.rand(0, config.background.length);
var background = document.getElementById("background");
var background2 = document.getElementById("background2");
NextBackground();

if(config.staticBackground == false)
{
    setInterval(NextBackground, config.backgroundSpeed)
}


function NextBackground() 
{
    switch (config.backgroundStyle) {
        
        case "slideright":
        index = (index + 1) % config.background.length;
            if (background.style.opacity=="0"){
                background2.setAttribute("class", "slideright")
            } else if (background2.style.opacity=="0"){
                background.setAttribute("class", "slideright")
            }
            
            setTimeout(() => {
                if (background.style.opacity=="0"){
                    background.setAttribute("src", config.background[index])
                    background2.style.opacity=0
                    background.style.opacity=0.3
                    background2.setAttribute("class", "")
                
                }else{
                    background2.setAttribute("src", config.background[index])
                    background2.style.opacity=0.3
                    background.style.opacity=0
                    
                    
                    background.setAttribute("class", "")
                }
                
            }, 1900);
        break;
        case "spin":
        index = (index + 1) % config.background.length;
            if (background.style.opacity=="0"){
                background.setAttribute("src", config.background[index])
                background.style.opacity=0.3
                background2.setAttribute("class", "spin")

            } else if (background2.style.opacity=="0"){
                background2.setAttribute("src", config.background[index])
                background2.style.opacity=0.3
                background.setAttribute("class", "spin")
            }
            
            setTimeout(() => {
                if ( (" " + background.className + " ").replace(/[\n\t]/g, " ").indexOf(" spin ") > -1 ){
                    
                    background.style.opacity=0
                    
                    background.setAttribute("class", "")
                
                }else{
                    
                    background2.style.opacity=0
                    
                    
                    background2.setAttribute("class", "")
                }
                
            }, 2600);
        break;
        case "fade":
        index = (index + 1) % config.background.length;

        lib.fadeInOut(600, "background", 0, 0.2);
    
        setTimeout(function()
        {
            
            background.setAttribute("src", config.background[index]);
        }, 600);
            break;
            case "zoom":
            index = (index + 1) % config.background.length;
            background.setAttribute("class", "zoomin")
            setTimeout(() => {
                background.setAttribute("src", config.background[index])
            }, 1900);
            setTimeout(() => {
                
                background.setAttribute("class", "")
                
            }, 3800);
            break;
        default:
        index = (index + 1) % config.background.length;

        lib.fadeInOut(600, "background", 0, 0.2);
    
        setTimeout(function()
        {
            
            background.setAttribute("src", config.background[index]);
        }, 600);
            break;
            
            
    }
    
}




