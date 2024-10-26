// let count =0;
// setInterval(function()
// {
//     console.log(count);
//     count = count+1;
// },2000);


let uniqueId = null;
let setIntervalButton = document.getElementById("setIntervalButton");

let clearIntervaButton = document.getElementById("clearIntervalButton");

setIntervalButton.onclick = function()
{
    let count =0;
    uniqueId= setInterval(function (params) {
        console.log(count);
        count = count+1;
        
    },1000);
    console.log(uniqueId);
}


clearIntervaButton.onclick = function()
{
   clearInterval(uniqueId);
}


