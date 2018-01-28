/*
    DOM elements....
*/
var slider = document.getElementById("volumeSlider");
var np = document.getElementById("now-playing");

var playButton = document.getElementById("playButton");

playButton.addEventListener("click", OnPlayClick);

/* 
    Setup the audio controls and create interval for music info updates.
*/
InitControls();
setInterval(UpdateMusicInfo, 1000);

/* 
    Initalize controls for music.
*/
function InitControls()
{
    slider.setAttribute("value", config.musicVolume);
    slider.addEventListener("input", UpdateVolume, false);
    slider.addEventListener("change", UpdateVolume, false);

}

/* 
    Update the volume of the player.
*/
function UpdateVolume()
{
    setVolume(slider.value);
}


/* 
    Update the music info.
*/
function UpdateMusicInfo()
{

    if(title.length != 0)
    {
        np.innerHTML = "Now playing: " + title;
    }
    else
    {
        np.innerHTML = "Now playing: n.a.";
    }
}

var playing = true;


/* 
    Process the events from the start/stop button.
 */
function OnPlayClick()
{
    if(playing)
    {
        playing = false;
        pause();

        playButton.innerHTML = "Start";
    }
    else
    {
        playing = true;
        resume();

        playButton.innerHTML = "Pause";
    }
}


/*
    Move cursor around.
*/
window.onload = function() {
  document.body.addEventListener("mousemove", function(event)
  {
        var cursor = document.getElementById("cursor");

        var x = event.pageX - cursor.width + 7;

        cursor.style.left = x;
        cursor.style.top = event.pageY - 7;
  });
}