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


    numberOfTilesAcross = document.getElementsByName("horizontalTilesTextBox")[0].value;
    numberOfTilesAlong = document.getElementsByName("verticalTilesTextBox")[0].value;
    console.log("Number of tiles along " + numberOfTilesAlong);

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

        // The code below adds an invisible div anc clears its "floats" everytime a row has been drawn. Otherwise all rows would be next to each other as opposed to on-top of each other.
        $("#board").append("<div id='" + i  + "'class='floatClear'>" + i + "</div>");
        $("#" + i).css({
            clear: 'left'
        });

    }

    tileXSize = $(".tile").css("width");  //Can't find css element before it is used in the document. That's why it needs to be here as opposed to above.
    tileXSizeInt=parseInt(tileXSize,10) //Parses CSS px text value to integer

    myBoardSize = calculateBoardDivSize(numberOfTilesAcross, numberOfTilesAlong,tileXSizeInt,50,5,1);

    console.log("The tile size is...:"+myBoardSize);
    $("#ui").append("<p>TileXSize is...</p>"+ myBoardSize); // Doesn't work currently.


}


function calculateBoardDivSize(numberOfTilesAcross, numberOfTilesAlong,tileXSize,tileYSize,tilePadding,tileBorderSize){

    boardWidth = numberOfTilesAcross*(tileXSize+tilePadding+(tileBorderSize*2));
    boardHeight = numberOfTilesAlong*(tileYSize+tilePadding+(tileBorderSize*2));

    return [boardWidth, boardHeight]; // Functions can't return more than one individual variable but can return arrays


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