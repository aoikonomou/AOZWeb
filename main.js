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


function drawArray() {

    boardWidth=9;
    boardHeight=9;
    xTileOffset = 25;
    yTileOffset = 100;

    //Temporary document location offset until I clarify if I can position relatively with css

    for (i = 0; i < boardWidth; i++) {

        for (j = 0; j < boardHeight; j++) {

            $("#body").append("<div id='" + i +j+ "'class='tile'>" +i +j+ "</div>");
            $("#"+i+j).css({left: ((i * 65)+xTileOffset), top: ((j * 65)+yTileOffset)});
            console.log(i, j);

        }
    }
}


// jQuery drag and drop
$(function () {
    $(".tile").draggable();
});