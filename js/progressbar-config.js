var config = 
{    
    /* 
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",

    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [512, 512],

    /*
        Want to just have one progressbar? Set this to true.
        Want to have a progressbar for each type? Set this to false. 
     */
    singleProgressBar: true,

    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: true,
        },

        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },

        "MAP": {
            enabled: true,
        },

        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },

        "INIT_SESSION": {
            enabled: true,
        }
    },

    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages! 
    */
    loadingMessages: 
    [
        "Picking up snails... &#x1f40c;",
        "Placing snails on the map... &#x1f40c;",
        "Crushing a snail.... &#x1f40c; &#x1f528;",
        "Stepping on a snail.... &#x1f40c; &#x1f462;",
        "Putting slugs back into their shell.. &#x1f41a.",
        "Playing cricket with a snail... &#x1f3cf",
        "Programming snail AI... &#x1f9e0;",
        "Selling snails to a french guy. &#x1f956;",
        "Eating FiveM's mascot snail... &#x1f374;",
        "Syntasu is snailsome! &#x1f60d;",
        "Oof!",
        "Learning a snail to drive... &#x1f697;",
        "Golfing using a snail... &#x1f3cc;",
        "Calling PETA for animal abuse... &#x1f4f1;",
        "No snails were hurt during this loadscreen. &#x1f691;",
    ],

    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,
}