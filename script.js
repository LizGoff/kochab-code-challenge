//console.log("JS");

$(document).ready(onReady);
//console.log("doc ready");

function onReady() {
//    console.log("jquery up");
    $("button").on("click", clickHandler) 
    console.log("been clicked");
    
    function clickHandler() {
            console.log("was clicked");
    }
}

//div id="thingAdd"
//p id="thingCounter"