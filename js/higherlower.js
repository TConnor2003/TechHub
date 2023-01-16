var maxscore = 0;
var score = 0;
function startgame() {
    generatecard();
    //replace the start button with the higher and lower buttons
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("restartbutton").style.display = "none";
    document.getElementById("higherbutton").style.display = "inline";
    document.getElementById("lowerbutton").style.display = "inline";
}
	function generatecard() {
		function card(value, name, suit) {
			this.value = value;
			this.name = name;
			this.suit = suit;
		}

		function deck() {
			this.names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
			this.suits = ["♥", "♦", "♠", "♣"];
			var cards = [];

			for (var s = 0; s < this.suits.length; s++) {
				for (var n = 0; n < this.names.length; n++) {
					cards.push(new card(n + 1, this.names[n], this.suits[s]));
				}
			}

			return cards;
		}

		var myDeck = new deck();

		//pick a random card from the deck
		var randomCard = myDeck[Math.floor(Math.random() * myDeck.length)];
		console.log(randomCard);
		document.getElementById("playingcard").innerHTML = randomCard.name + " of " + randomCard.suit;

		//if the card is a heart or diamond, make the text red else make it black
		if (randomCard.suit == "♥" || randomCard.suit == "♦") {
			document.getElementById("playingcard").style.color = "red";
		} else {
			document.getElementById("playingcard").style.color = "black";
		}
//create variable to store the value of the card
        var cardvalue = randomCard.value;
        //return the value of the card
        console.log (cardvalue);
        return cardvalue;
	}
//print the value of the card to the console
var cardvalue = cardvalue;
console.log (cardvalue);


    //player selects higher or lower and the card is generated again and if the player is correct, the score is increased
    function higher() {

        var newcardvalue = generatecard();
        if (newcardvalue > cardvalue) {
            score++;
            document.getElementById("score").innerHTML = ("Score:" + score);
            cardvalue = newcardvalue;
        } else {
            if (score > maxscore) {
                maxscore = score;
                document.getElementById("highscore").innerHTML = ("High Score:" + maxscore);
            }
            score = 0;
            document.getElementById("score").innerHTML = ("Score:" + score);
            cardvalue = newcardvalue;
            document.getElementById("restartbutton").style.display = "inline";
            document.getElementById("higherbutton").style.display = "none";
            document.getElementById("lowerbutton").style.display = "none";
        }
    }

    function lower() {
        var newcardvalue = generatecard();
        if (newcardvalue < cardvalue) {
            score++;
            document.getElementById("score").innerHTML = ("Score:" + score);
            cardvalue = newcardvalue;
        } else {
            if (score > maxscore) {
                maxscore = score;
                document.getElementById("highscore").innerHTML = ("High Score:" + maxscore);
            }
            score = 0;
            document.getElementById("score").innerHTML = ("Score:" + score);
            cardvalue = newcardvalue;
            document.getElementById("restartbutton").style.display = "inline";
            document.getElementById("higherbutton").style.display = "none";
            document.getElementById("lowerbutton").style.display = "none";
        }
    }