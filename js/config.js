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

    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
        
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
        "AINGJmnwMic", "sT_VcU_jOEM", "PVfjOjiBUkc", "vWdjWYhEONA",
        "HcJHr_8i-PY", "HCXW-Wbfn4U", "E1nBw1IwCI8", "wzAq_wbVT9A",
        "KeuPv9lN6zI", "IEZ6JHezCAw", "kGh7spYm2fs", "wLo2RvLU57c",
        "NYuhye3AYSY", "u3xqpu7v8jU", "UTBuH5ZNnJQ", "vWdjWYhEONA",
        "FYW1Y4EEA2Y", "E-4Dtd6mC-c", "zQnj66Xuajs", "8OgHDck_vT0",
        "kUdCNdd9n28", "qDUH3PUoYtw", "SoMeB4QBVug", "8sV6AT6jVuI"
    ],


    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 20,
    /*
        array of images you'd like to display in the background.
        You can:
        - use a link (https://example.com/image.jpg)
        - use a image stored in the img folder (img/example.jpg)
    */
    background: 
    [
        "http://wallpaperswide.com/download/gta_v_8-wallpaper-3840x2160.jpg",
        "https://images7.alphacoders.com/587/587535.jpg",
        "http://flashwallpapers.com/wp-content/uploads/2015/06/gta-5-4k-wallpaper-3.jpg",
        
    ],
    backgroundtimer: 6, //seconds
    fadespeed:2, //seconds, 2 or more is recommended, otherwise some flickering may occur.
}
