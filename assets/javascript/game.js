$(document).ready(function() {

    var score = 0;
    var numberOptions = [10, 5, 3, 1, 4, 7, 2, 9, 6];

    var random = Math.floor(Math.random() * 102)+19;
        $("#randomNumber").text(random);

    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        var imageCrystal = numberOptions[Math.floor(Math.random() * numberOptions.length)];
        console.log(i,imageCrystal)
        $("#crystal-" + i).attr("data-crystalvalue", imageCrystal);
    }

    $(".crystal").on("click", function() {
        console.log(this)
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        console.log("New score: " + score);
        $("#totalScore").html(score);

        if (score === random) {
            $("#alert").html("YOU WIN!!!");
        }
        else if (score >= random) {
            $("#alert").html("YOU LOOSE!!!");
        }
    });
       






})