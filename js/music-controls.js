
var slider = document.getElementById("volumeSlider");
var np = document.getElementById("now-playing");

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", OnPlayClick);

InitControls();
setInterval(UpdateMusicInfo, 1000);

function InitControls()
{
    slider.setAttribute("value", config.musicVolume);
    slider.addEventListener("change", UpdateVolume, false);
}

function UpdateVolume()
{
    setVolume(slider.value);
}

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
