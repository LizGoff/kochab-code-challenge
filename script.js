//console.log("JS");

let clickCount = 0;

$(document).ready(onReady);
//console.log("doc ready");

function onReady() {
//    console.log("jquery up");
    $("button").on("click", clickHandler); 
    console.log("been clicked");
   // addThingToDom();
    displayThingCounter();

    
    function clickHandler() {
        console.log("was clicked");
        clickCount++;
        console.log(clickCount);
        addThingToDom();
        displayThingCounter();
    }

    function displayThingCounter() {
        $("#thingCounter").text(clickCount);
     //   console.log(clickCount);
    }

    function addThingToDom() {
        $("#thingAdd").append("<div>" + $("#thingAdd").val() + "</div>");
        console.log("thingAdd");
    }


} //end onReady

//div id="thingAdd"
//p id="thingCounter"