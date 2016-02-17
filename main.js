/**
 * Created by andreasoikonomou on 17/02/2016.
 */


function jQueryHelloWorld(){

    // Some javascript/jQuery stuff
    //Print something in the document with jQuery
    console.log("Writing to console");
    alert("Writing to popup window ");
    //Write to HTML
    $( "#div1" ).append( "<p>jQuery wrote here</p>" );


}

function myArray(){

    var myArray = [[1,50,100],[1,50,100],[1,50,100]];
    console.log("Blah " + myArray);

    for(i=0;i<3;i++){

        for(j=0;j<3;j++){

console.log(myArray[i][j]);

        }

    }

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