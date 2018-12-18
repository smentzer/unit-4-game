// var targetNumber = 0;



var counter = 0;
// var increment = numberOptions[Math.round(Math.random())];
var wins = 0;
var losses = 0;

//loop to create gems for every numberOption.
//   for (var i = 0; i < numberOptions.length; i++) {
//     var imageCrystal = $("<img>");
//     gemImage.addClass("gems");
//     gemImage.attr("src", "../images/pearl.png");
//     gemImage.attr("data-gemvalue", numberOptions[i]);
//     $("#gems").append(gemImage);
//   };

var targetNumber = Math.floor(Math.random() * 50) + 1;
$("#number-to-guess").text(targetNumber);
//gems on click
$(".gems").on("click", function () {

    counter += 10;

    // alert("Total Gems: " + counter); <-- i dont ndeed this anymore.

    //logic
    if (counter === targetNumber) {

        // If the numbers match we'll celebrate the user's win.
        wins++;
        alert("You win!");
        // var targetNumber = Math.floor(Math.random() * 50) + 1;
        // $("#number-to-guess").text(targetNumber);
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
        losses++;
        alert("You lose!!");
        // var targetNumber = Math.floor(Math.random() * 50) + 1;
        // $("#number-to-guess").text(targetNumber);
    }
    //for html
    $("#wins-text").html("Total Wins: " + wins);
    $("#losses-text").html("Total Losses: " + losses);
    $("#number-to-guess").html(targetNumber);
    $("#new-score").html("Total gems: " + counter);






    // document.getElementById("wins-text").innerHTML = "Total Wins: " + wins;
    // document.getElementById("losses-text").innerHTML = "Total Losses: " + losses;
    // document.getElementById("new-score").innerHTML = "

});