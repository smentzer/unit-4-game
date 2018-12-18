// var targetNumber = 0;



var counter = 0;
// var increment = numberOptions[Math.round(Math.random())];
var wins = 0;
var losses = 0;


var randomNumber = Math.floor(Math.random() * 20) + 1;
$("#one").attr("data-gemValue", randomNumber);

randomNumber = Math.floor(Math.random() * 20) + 1;
$("#two").attr("data-gemValue", randomNumber);

randomNumber = Math.floor(Math.random() * 20) + 1;
$("#three").attr("data-gemValue", randomNumber);

randomNumber = Math.floor(Math.random() * 20) + 1;
$("#four").attr("data-gemValue", randomNumber);




var targetNumber = Math.floor(Math.random() * 51) + 50;
$("#number-to-guess").text(targetNumber);


//gems on click
$(".gemImage").on("click", function () {

    counter += parseInt($(this).attr("data-gemValue"));
    console.log(counter)
    console.log(targetNumber)


    // alert("Total Gems: " + counter); <-- i dont need this any more

    //logic
    if (counter === targetNumber) {

        // If the numbers match we'll celebrate the user's win.
        wins++;
        alert("You win!");
        targetNumber = Math.floor(Math.random() * 51) + 50;
        $("#number-to-guess").text(targetNumber);
        //reset
        counter = 0;
        var randomNumber = Math.floor(Math.random() * 20) + 1;
       
        $("#one").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#two").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#three").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#four").attr("data-gemValue", randomNumber);

       
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        losses++;
        alert("You lose!!");
        targetNumber = Math.floor(Math.random() * 51) + 50;
        $("#number-to-guess").text(targetNumber);
        //reset
        counter = 0;
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#one").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#two").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#three").attr("data-gemValue", randomNumber);

        randomNumber = Math.floor(Math.random() * 20) + 1;
        $("#four").attr("data-gemValue", randomNumber);
    }

    //for html
    $("#wins-text").html("Total Wins: " + wins);
    $("#losses-text").html("Total Losses: " + losses);
    $("#number-to-guess").html(targetNumber);
    $("#new-score").html("Total gems: " + counter);

});