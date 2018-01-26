Init();

//Cache to keep track of all progress values.
//This is need for the Math.max functions (so no backwards progressbars).
var progressCache = [];

function Init()
{
    var logo = document.getElementById("logo");
    logo.setAttribute("src", config.image);
    logo.setAttribute("width", config.imageSize[0]);
    logo.setAttribute("height", config.imageSize[1]);
    

    if(config.singleProgressBar)
    {
        //Start single progressbar.
        var progressBar = document.getElementById("pb0");
        progressBar.classList.remove("hide");

        setInterval(UpdateSingle, 250);
    }
    else
    {
        //Show the progressbars we need.
        for(i = 0; i < 5; i++)
        {
            if(config.progressBars[types[i]].enabled)
            {
                var progressBar = document.getElementById("pb" + i);
                progressBar.classList.remove("hide");
            }
        }

        //Start updating.
        setInterval(UpdateMulti, 250);
    }
}

function UpdateMulti()
{
    UpdateTotalProgress();

    //Set individual loading bars:
    for(i = 0; i < types.length; i++)
    {
        var progress =  GetTypeProgress(types[i]);
        var progressBar = document.getElementById("pb" + i);
        
        if(progressCache[i + 1] != null)
        {
            progress = Math.max(progress, progressCache[i + 1]);
        }

        progressBar.value = progress;
        progressCache[i + 1] = progress;
    }
}    

function UpdateSingle()
{
    UpdateTotalProgress();

    var progressBar = document.getElementById("pb0");
    progressBar.value = progressCache[0];

}

function UpdateTotalProgress()
{
        //Set the total progress counter:
        var total = GetTotalProgress();
        var totalProgress = document.getElementById("progress-bar-value");
    
        if(progressCache[0] != null)
        {
            total = Math.max(total, progressCache[0]);
        }
        
        totalProgress.innerHTML = Math.round(total);
        progressCache[0] = total;
}