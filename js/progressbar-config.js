var Config = 
{
    /*
        The image we want to show in the loading screen.
        Currently the CSS is setup for square (1:1 ratio) images.
    */
    image: "img/logo.png",

    /*
        The dimensions of the image (width, height)
    */
    imageSize: [384, 384],

    /*
        Toggle to set wether the progressbar should be a single progressbar or splitup in multiple
        True -> Single progressbar that accommodates all the states.
        False -> Multiple progressbars, one for each state (configurable).
    */
    singleProgressBar: true,
    singleProgressBarColor: [233, 198, 70],

    /*
        If multiple progressbars are enabled, the following values
        will be used from the config. These each apply to a specific progressbar.
    */
    coreProgressBar = 
    {
        "enabled": true,
        "color": [255, 102, 102],
    },

    beforeProgressBar = 
    {
        "enabled": true,
        "color": [102, 194, 255],
    },

    mapProgressbar = 
    {
        "enabled": true,
        "color": [102, 102, 255],
    },

    afterProgressBar = 
    {
        "enabled": true,
        "color": [133, 224, 133],
    },

    sessionProgressBar = 
    {
        "enabled": true,
        "color": [255, 204, 0],
    },

    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slow
        You can use UTF-8 emoticons inside loading messages! 
    */
    loadingMessages = 
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
    loadingMessageSpeed = 500,
        
};