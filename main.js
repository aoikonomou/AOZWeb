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

    boardWidth = 9;
    boardHeight = 9;
    xTilesTopOffset = 10; // From left side of div
    yTilesTopOffset = 10; // From top corner of div
    xTileOffset = 65; // X distance to put the next div (not really size)
    yTileOffset = 65; // X distance to put the next div (not really size)

    //Temporary document location offset until I clarify if I can position relatively with css

    for (i = 0; i < boardWidth; i++) {

        for (j = 0; j < boardHeight; j++) {

            $("#board").append("<div id='" + i + j + "'class='tile'>" + i + j + "</div>");
            $("#" + i + j).css({
                left: ((i * xTileOffset) + xTilesTopOffset),
                top: ((j * yTileOffset) + yTilesTopOffset)
            });
            console.log(i, j);

        }
    }
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