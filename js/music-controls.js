setInterval(UpdateMusicInfo, 500);

function UpdateMusicInfo()
{
    var np = document.getElementById("now-playing");
    np.innerHTML = "Now playing: " + title;
}