//console.log("JS");

$(document).ready(onReady);
//console.log("doc ready");

function onReady() {
//    console.log("jquery up");
    $("button").on("click", clickHandler) 
    console.log("been clicked");
    addThingToDom();
    
    function clickHandler() {
        console.log("was clicked");
        addThingToDom();
    }

    function addThingToDom() {
        $("#thingAdd").append("<div>" + $("#thingAdd").val() + "</div>");
        console.log("thingAdd");
    }


} //end onReady

//div id="thingAdd"
//p id="thingCounter"