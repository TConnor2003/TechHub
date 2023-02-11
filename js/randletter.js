/* set interval of 0.5 seconds in a function that automatically runs when x=1 */
var x = 1;
var interval = setInterval(function () {
    if (x == 1) {
        var rand = Math.floor(Math.random() * 26) + 1;
        var letter = String.fromCharCode(rand + 64);
        $("#letter").html(letter);
    }
}, 500);



$("#generate").click(function () {
    x = 0;
    /* set div to font size 300px */
    $("#letter").css("font-size", "500px");
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letter = letters[Math.floor(Math.random() * letters.length)];
	$("#letter").html(letter);
	console.log("The letter is " + letter);
    /* function storeletters */
    storeletters();
});

function storeletters() {
    var letter = $("#letter").html();
    /* keep the last 5 letters in variables */
    var letter5 = "";
    var letter4 = letter3;
    var letter3 = letter2;
    var letter2 = letter1;
    var letter1 = letter;
    /* store the last 5 letters in a variable */
    var last5 = letter1 + letter2 + letter3 + letter4 + letter5;
    console.log("The last 5 letters are " + last5);
}



