/* set interval of 0.5 seconds in a function that automatically runs when x=1 */
var x = 1;
var interval = setInterval(function () {
    if (x == 1) {
        var words = ["Harry Potter Places", "Harry Potter Animals", "Harry Potter Characters", "Harry Potter Spells", "Marvel Places", "Marvel Animals","Marvel Characters"];
        /* select a random word from array words */
        var word = words[Math.floor(Math.random() * words.length)];
        $("#letter").html(word);
    }
}, 500);

$("#generate").click(function () {
    x = 0;
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letter = letters[Math.floor(Math.random() * letters.length)];
	$("#letter").html(letter);
    $("#background").css("background-color", "#60c040");
    $("#counter").css("display", "block");
    timer();
    /* set counter to 30 in html */
    $("#counter").html(100);
    if ($(window).width() < 600) {
        $("#letter").css("font-size", "300px");
    } else {
        $("#letter").css("font-size", "500px");
    }
});

function timer() {
    var counter = 100;
    var interval = setInterval(function () {
        counter--;
        if (counter < 50) {
            $("#background").css("transition", "1s");
            $("#background").css("background-color", "orange");
        }
        if (counter < 0) {
            clearInterval(interval);
            $("#background").css("transition", "0s");
            $("#background").css("background-color", "red");
            $("#counter").css("display", "none");
            return;
        }
        /* display counter in html */
        $("#counter").html(counter);
    }, 333.3333);
}
