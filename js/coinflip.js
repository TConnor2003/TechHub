//when user clicks button with id "flip" run function coinflip()
$("#flip").click(function() {
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
    //wait 1 second, then change src of image with id "coin" to "/assets/images/coinflip/" + result of coinflip() function + ".png" and write it underneath the image
    setTimeout(function() {
        $("#result").attr("src", "/assets/images/coinflip/" + coin + ".png");
        $("#coin").append("<br>" + coin);
    }, 1000);
});
