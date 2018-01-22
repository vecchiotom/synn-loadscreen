var progressBar = document.getElementById("loading-bar");
var progressBarText = document.getElementById("loading-bar-progress");

var percentageIncrement = 14.2857
var totalPercentage = 0;

var initJobCount = 0;
var dataJobCount = 0;
    
const handlers = 
{
    startInitFunctionOrder(data)
    {
        initJobCount = data.count;
        totalPercentage = totalPercentage + 14.2857;
        updatePercentage(0)
    },

    initFunctionInvoking(data)
    {
        var percent = (data.idx / initJobCount)
        updatePercentage(14.2857 * percent)
    },
    startDataFileEntries(data)
    {
        initJobCount = data.count;
    },
    performMapLoadFunction(data)
    {
        dataJobCount++;
        var percent = (dataJobCount / initJobCount)
        updatePercentage(14.2857 * percent)
    }
};

window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});

function updatePercentage(percent)
{
    progressBar.value = parseInt(Math.ceil(totalPercentage + percent));
    progressBarText.innerHTML = parseInt(Math.ceil(totalPercentage + percent));
}