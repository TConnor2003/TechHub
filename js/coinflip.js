//when user clicks button with id "flip" run function coinflip()
//create function flip() to be called by the button
$(".flip").click(function() {
    //if function is already running, return
    if ($("#result").attr("src") == "/assets/images/coinflip/flipping.png") {
        return;
    }
    //generate either 0 or 1
    var coin = Math.floor(Math.random() * 2);
    //if 0, set coin to "heads" else tails
    if (coin == 0) {
        coin = "heads";
    }
    else {
        coin = "tails";
    }
    //create image with id "coin" with src "/assets/images/coinflip/flipping.png" in div with id "output"
    $("#coin").html("<img id='result' src='/assets/images/coinflip/flipping.png'>");
    $("#coin").append("<br>Flipping...");
    //wait 1 second, then set the image to the result of the coinflip
    setTimeout(function() {
        //replace Flipping... with the result of the coinflip
        $("#coin").html("<img id='result' src='/assets/images/coinflip/" + coin + ".png'>");
        $("#result").attr("src", "/assets/images/coinflip/" + coin + ".png");
        $("#coin").append("<br>" + coin);
        console.log("The result was " + coin);
    }, 1000);

});
