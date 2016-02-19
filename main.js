/**
 * Created by andreasoikonomou on 17/02/2016.
 */


function jQueryHelloWorld() {

    // Some javascript/jQuery stuff
    //Print something in the document with jQuery
    console.log("Writing to console");
    //alert("Writing to popup window ");
    //Write to HTML
    $("#div1").append("<p>jQuery wrote here</p>");


}

function myArray() {

    var myArray = [[1, 50, 100], [1, 50, 100], [1, 50, 100]];
    console.log("Blah " + myArray);

    for (i = 0; i < 3; i++) {

        console.log(i);

        for (j = 0; j < 3; j++) {

            console.log(myArray[i][j]);

        }

    }

}

function drawArray() {
    for (i = 0; i < 3; i++) {

        for (j = 0; j < 3; j++) {

            $("#body").append("<div id='" +

                i+"'class='draggable'>"+"Vertical</div>").offset({top: (i * 10), left: j*10});

        }
    }

}


// jQuery drag and drop
$(function () {
    $(".draggable").draggable();
});