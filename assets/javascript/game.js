$(document).ready(function() {

    var score = 0;
    var win = 0;
    var lose = 0;
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
        $("#alert").html("");


        if (score === random) {
            $("#alert").html("YOU WIN!!!");
            win ++;
            $("#win").html("Wins: " + win);
            reset();
        }
        else if (score >= random) {
            $("#alert").html("YOU LOOSE!!!");
            lose ++;
            $("#lose").html("Losses: " + lose);
            reset();
        }

    function reset () {
        score = 0;
        $("#totalScore").html(score);
        random = Math.floor(Math.random() * 102)+19;
        $("#randomNumber").text(random);
        for (var i = 0; i < 4; i++) {
            var imageCrystal = $("<img>");
            var imageCrystal = numberOptions[Math.floor(Math.random() * numberOptions.length)];
            console.log(i,imageCrystal)
            $("#crystal-" + i).attr("data-crystalvalue", imageCrystal);
        }
    }

    });
       






})