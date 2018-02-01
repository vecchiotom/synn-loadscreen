
//YouTube IFrame API player.
var player;

if(config.enableMusic)
{
    //Create DOM elements for the player.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";

    var ytScript = document.getElementsByTagName('script')[0];
    ytScript.parentNode.insertBefore(tag, ytScript);

    //Pick random index to start at.
    var musicIndex = lib.rand(0, config.music.length);
    var title = "n.a.";
}

function onYouTubeIframeAPIReady() 
{
    var videoId = config.music[musicIndex];

    player = new YT.Player('player', {
        width: '1',
        height: '',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError 
        }
    });
}

function onPlayerReady(event) 
{
    title = event.target.getVideoData().title;
    player.setVolume(config.musicVolume);

    play();
}

function onPlayerStateChange(event) 
{
    if(event.data == YT.PlayerState.PLAYING)
    {
        title = event.target.getVideoData().title;
    }

    if (event.data == YT.PlayerState.ENDED) 
    {
        musicIndex++;
        play();
    }
}

function onPlayerError(event)
{
    switch (event.data) 
    {
        case 2:
            console.log("Invalid video url!");
            break;
        case 5:
            console.log("HTML 5 player error!");
        case 100:
            console.log("Video not found!");
        case 101:
        case 150:
            console.log("Video embedding not allowed.");
            break;
        default:
            console.log("Looks like you got an error bud.")
    }

    skip();
}

function skip()
{
    musicIndex++;
    play();
}

function play() 
{
    title = "n.a.";

    var idx = musicIndex % config.music.length;
    var videoId = config.music[idx];

    console.log("Playing next.. id: " + idx + " vid:" + videoId);

    player.loadVideoById(videoId, 0, "tiny");
    player.playVideo();
}

function resume()
{
    player.playVideo();
}

function pause() 
{
    player.pauseVideo();
}

function stop() 
{
    player.stopVideo();
}

function setVolume(volume)
{
    player.setVolume(volume)
}