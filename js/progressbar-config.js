var config = 
{
    image: "img/logo2.png",
    imageSize: [512, 512],

    singleProgressBar: true,

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
        "Hold on, Picking up snails... &#x1f40c;",
        "Hold on, Placing snails... &#x1f40c;",
        "Hold on, crushing snails.... &#x1f40c; &#x1f528;",
        "Hold on, stepping snails.... &#x1f40c; &#x1f462;",
        "Just a second, putting slugs back into their shell...",
        "Just a moment, playing breakout with a snail...",
        "Hold on, programming snail AI... &#x1f9e0;",
        "Hold on, sprinkling salt over a snail...",
        "Just a second, selling snails to a french guy. &#x1f1eb;",
        "Eating FiveM's mascot snail... &#x1f374;",
        "Loading the game at a... snails pace, ba-dum-tss &#x1f602;", 
        "Syntasu is snailsome! &#x1f60d;",
    ],

    /*
        Rotate the loading message every 500 milliseconds (default value).
    */
    loadingMessageSpeed: 500,
}