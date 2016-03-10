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

    allTilesWidth =100; // Holds the result of the calulation of the size of the tiles array so that it can make the board div accordingly big.
    allTilesHeight =100; // Holds the result of the calulation of the size of the tiles array so that it can make the board div accordingly big.

    // Get the tile size variables from the css file. Pass everything necessary to the calculateBoardSizeFunction

    numberOfTilesAcross = 4;
    numberOfTilesAlong = 4;
    xTilesTopOffset = 10; // From left side of div
    yTilesTopOffset = 10; // From top corner of div
    xTileOffset = 65; // X distance to put the next div (not really size)
    yTileOffset = 65; // X distance to put the next div (not really size)


    for (i = 0; i < numberOfTilesAcross; i++) {

        for (j = 0; j < numberOfTilesAlong; j++) {

            $("#board").append("<div id='" + i + j + "'class='tile'>" + i + j + "</div>");
            $("#" + i + j).css({
                //left: ((i * xTileOffset) + xTilesTopOffset),
                //top: ((j * yTileOffset) + yTilesTopOffset)
                float: 'left'
            });



            console.log(i, j);

        }
    }

    tileXSize = $(".tile").css("width");  //Can't find css element before it is used in the document. That's why it needs to be here as opposed to above.
    tileXSizeInt=parseInt(tileXSize,10) //Parses CSS px text value to integer
    console.log("The tile size is...:"+tileXSizeInt);
    $("#ui").append("<p>TileXSize is...</p>"+ tileXSizeInt); // Doesn't work currently.


}


function calculateBoardDivSize(numberOfTilesAcross, numberOfTilesAlong,tileXSize,tileYSize,tilePadding,tileBorderSize){

    boardWidth = numberOfTilesAcross*(tileXSize+tilePadding+(tileBorderSize*2));
    boardWidth = numberOfTilesAlong*(tileYSize+tilePadding+(tileBorderSize*2));

    return boardWidth;
    return boardHeight;


}


// jQuery drag and drop
$(function () {

    $(".tile").draggable();
});

// Testing Angular.JS

var andreas = angular.module('AOZWeb', []);
andreas.controller('AOZWebViewController', ['$scope', function ($scope) {

    // My variables go here
    $scope.angularTestText = 'Angular.JS wrote here';

}
]);