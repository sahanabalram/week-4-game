function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var wins = 0;
var losses = 0;
var total = 0;
// Random Number generated during the start of the game
$(document).ready(function () {
    var storeNumber;
    reset();
    // totalling happening when each crystal is getting clicked and the total gets displayed in the html file
    $("#crystal").on("click", function () {
        if (total === storeNumber) {
            wins++;
            $("#wins").html(wins);
            $('#message').html("<p>You won!!!</p>");
            reset();            
        } else if (total > storeNumber) {
            losses++;
            $("#losses").html(losses);
            $('#message').html("<p>You lost!!!</p>");
            reset();
        } else {
            $('#message').html("<p>Game in progress..</p>");
        }
    });
    $("#red-crystal").on("click", function () {
        addTotal(this);
        $("#score-total").html(total);
    });
    $("#white-crystal").on("click", function () {
        addTotal(this);
        $("#score-total").html(total);
    });
    $("#green-crystal").on("click", function () {
        addTotal(this);
        $("#score-total").html(total);
    });
    $("#blue-crystal").on("click", function () {
        addTotal(this);
        $("#score-total").html(total);
    });
    // function for adding the crystals
    function addTotal(item) {
        total = total + $(item).data().value;
    }

    function reset() {
        storeNumber = generateRandomNumber(19, 120);
        $("#random-number").html(storeNumber);
        $("#red-crystal").data({
            'value': generateRandomNumber(1, 12)
        });
        $("#white-crystal").data({
            'value': generateRandomNumber(1, 12)
        });
        $("#green-crystal").data({
            'value': generateRandomNumber(1, 12)
        });
        $("#blue-crystal").data({
            'value': generateRandomNumber(1, 12)
        });
        total = 0;
        $("#score-total").html(total);
    }
});
