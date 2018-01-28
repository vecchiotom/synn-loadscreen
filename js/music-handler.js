
//YouTube IFrame API player.
var player;

//Create DOM elements for the player.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var ytScript = document.getElementsByTagName('script')[0];
ytScript.parentNode.insertBefore(tag, ytScript);

//Pick random index to start at.
var index = lib.rand(0, config.music.length);


function onYouTubeIframeAPIReady() {

    var videoId = config.music[index];

    player = new YT.Player('player', {
        height: '1',
        width: '1',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });

}

function onPlayerReady(event) 
{
    player.setVolume(config.musicVolume);
    player.setPlaybackQuality('small');

    play();
}

function onPlayerStateChange(event) 
{
  if (event.data == YT.PlayerState.ENDED) 
  {
      index++;
      play();
  }
}

function play()
{
    var idx = index % config.music.length;
    var videoId = config.music[idx];

    player.loadVideoById(videoId);
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