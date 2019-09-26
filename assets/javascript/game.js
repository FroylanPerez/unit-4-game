$(document).ready(function() {

$(function() {
    var random = Math.floor(Math.random() * 120)+1;
    if(random >=19) {
        $("#randomNumber").text(random);
    }
    else {
        // $("#randomNumber").text("please refresh to get a valid number");
        $("#randomNumber").trigger("reset");
    }
})




})