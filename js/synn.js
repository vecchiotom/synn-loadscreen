var lib = 
{
    rand: function(min, max)
    {
        return min + Math.floor(Math.random()*max);
    },

    fadeInOut: function(duration, elementId)
    {
        var halfDuration = duration / 2;

        setTimeout(function()  
        {
            var element = document.getElementById(elementId);
            element.style.opacity = 0;

            setTimeout(function()  
            {
                element.style.opacity = 1;

            }, halfDuration);  

        }, halfDuration);
    },
}
