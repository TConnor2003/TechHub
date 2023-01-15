function generatecard() {
	function card(value, name, suit) {
		this.value = value;
		this.name = name;
		this.suit = suit;
	}

	function deck() {
		this.names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
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
	document.getElementById("playingcard").innerHTML = randomCard.name + " of " + randomCard.suit;
	console.log(randomCard);
    //if the card is a heart or diamond, make the text red else make it black
    if (randomCard.suit == "♥" || randomCard.suit == "♦") {
        document.getElementById("playingcard").style.color = "red";
    } else {
        document.getElementById("playingcard").style.color = "black";
    }




}
