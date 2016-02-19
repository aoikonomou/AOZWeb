/**
 * Created by andreasoikonomou on 17/02/2016.
 */


function jQueryHelloWorld() {

    // Some javascript/jQuery stuff
    //Print something in the document with jQuery
    console.log("Writing to console");
    //alert("Writing to popup window ");
    //Write to HTML
    $("#ui").append("<p>jQuery wrote here</p>");


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

    x=9;
    y=9;
    xOffset = 25;
    yOffset = 100;

    //Temporary document location offset until I clarify if I can position relatively with css

    for (i = 0; i < x; i++) {

        for (j = 0; j < y; j++) {

            $("#body").append("<div id='" + i +j+ "'class='tile'>" +i +j+ "</div>");
            $("#"+i+j).css({left: ((i * 65)+xOffset), top: ((j * 65)+yOffset)});
            console.log(i, j);

        }
    }

}


// jQuery drag and drop
$(function () {
    $(".tile").draggable();
});