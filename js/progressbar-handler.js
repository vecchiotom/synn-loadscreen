var debug = document.getElementById("debug");
var progressBar = document.getElementById("loading-bar");
var progressBarText = document.getElementById("loading-bar-progress");

var loadingStatesCount = 0;
var states = {};
 
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

setInterval(UpdateDebug, 100);

function UpdateDebug()
{
    debug.innerHTML = JSON.stringify(states);
}