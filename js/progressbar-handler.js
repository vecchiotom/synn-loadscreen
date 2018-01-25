/*
    Config variables...
*/
var multibar = false;

// var debug = document.getElementById("debug");
// var progress = document.getElementById("progress");

var progressBar = document.getElementById("loading-bar");
var progressBarText = document.getElementById("loading-bar-progress");

var stateCount = 4;
var states = {};

var types = [
    "INIT_CORE",
    "INIT_BEFORE_MAP_LOADED",
    "INIT_AFTER_MAP_LOADED",
    "MAP",
    "INIT_SESSION"
];
 
const handlers = 
{
    startInitFunction(data)
    {
        //Create a entry for every type.
        if(states[data.type] == null)
        {
            states[data.type] = {};
            states[data.type].count = 0;
            states[data.type].done = 0;   
            
            //HACK: Increment stateCount if INIT_CORE is present
            //      INIT_CORE seems to not get called guaranteed.
            //      As far I know the INIT_BEFORE/AFTER, MAP and SESSION seems to get always called.
            //      Upon reconnect supposedly it will only call INIT_SESSION. But as of yet we do not receive any event upon reconnect.
            //      Theoretically we could detect reconnecting if INIT_SESSION is the first event to get invoked.
            //      Resetting the stateCount to one will allow to propely let the progressbar progres. 
            if(data.type == types[0])
            {
                stateCount++;
            }
        }
    },

    startInitFunctionOrder(data)
    {
        //Collect the total count for each type.
        if(states[data.type] != null)
        {
            states[data.type].count += data.count;
        }
    },

    initFunctionInvoked(data)
    {
        //Increment the done accumulator based on type.
        if(states[data.type] != null)
        {
            states[data.type].done++;
        }
    },

    startDataFileEntries(data)
    {
        //Manually add the MAP type.
        states["MAP"] = {};
        states["MAP"].count = data.count;
        states["MAP"].done = 0; 
    },

    performMapLoadFunction(data)
    {
        //Increment the map done accumulator.
        states["MAP"].done++;
    }

};

window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});

setInterval(Update, 100);

var lastProgress = 0;

//Update the progressbar(s).
function Update()
{
    if(!multibar)
    {
        var value = Math.max(GetTotalProgress(), lastProgress);
        lastProgress = value;

        progressBar.value = value;
        progressBarText.innerHTML = value;
    }
    else
    {
        console.log("go die in a fire");
    }
}

//Get the progress of a specific type. (See types array).
function GetTypeProgress(type)
{
    if(states[type] != null)
    {
        var progress = states[type].done / states[type].count;
        return Math.round(progress * 100);
    }

    return 0;
}

//Get the total progress for all the types.
function GetTotalProgress()
{
    var totalProgress = 0;
    
    for(var i = 0; i < types.length; i++)
    {
        var key = types[i];
        totalProgress += GetTypeProgress(key);
    }
    
    //Dont want to divide by zero because it will return NaN.
    //Be nice and return a zero for us.
    if(totalProgress == 0) return 0;
    
    return totalProgress / stateCount;
}