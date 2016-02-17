/**
 * Created by andreasoikonomou on 17/02/2016.
 */


function myArray(){

var myArray = new Array();
myArray = ["a", "b", "c"];
alert("Blah " + myArray);

}

function jQueryHelloWorld(){

    // Some javascript/jQuery stuff
    //Print something in the document with jQuery
    console.log("bla");


}


function drawArray(){
    for (i=1;i<10;i++){

        $("#body").append("<div>Horizontal</div>").offset({top: 1, left:(i*10) })


        for (j=1;j<10;j++){

            $("#body").append("<div>Vertical</div>").offset({top: (i*10), left:1})


        }
    }

}



// jQuery drag and drop
$(function() {
    $( "#blah" ).draggable();
});