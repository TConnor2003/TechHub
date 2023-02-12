/* set interval of 0.5 seconds in a function that automatically runs when x=1 */
var x = 1;
var interval = setInterval(function () {
    if (x == 1) {
        var words = ["Harry Potter Places", "Harry Potter Animals", "Harry Potter Characters", "Harry Potter Spells", "Marvel Places", "Marvel Animals","Marvel Characters"];
        /* select a random word from array words */
        var word = words[Math.floor(Math.random() * words.length)];
        $("#letter").html(word);
    }
}, 2500);



$("#generate").click(function () {
    x = 0;
    /* set div to font size 500px if device is less than 600px wide set it to 300 */
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letter = letters[Math.floor(Math.random() * letters.length)];
	$("#letter").html(letter);
	console.log("The letter is " + letter);
    if ($(window).width() < 600) {
        $("#letter").css("font-size", "300px");
    } else {
        $("#letter").css("font-size", "500px");
    }
});