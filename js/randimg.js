//display random image
function randimg() {
  var images = new Array();
    images[0] = "ace_of_hearts.png";
    images[1] = "2_of_hearts.png";
    images[2] = "3_of_hearts.png";
    images[3] = "4_of_hearts.png";
    images[4] = "5_of_hearts.png";
    images[5] = "6_of_hearts.png";
    images[6] = "7_of_hearts.png";
    images[7] = "8_of_hearts.png";
    images[8] = "9_of_hearts.png";
    images[9] = "10_of_hearts.png";
    images[10] = "jack_of_hearts.png";
    images[11] = "queen_of_hearts.png";
    images[12] = "king_of_hearts.png";
    images[13] = "ace_of_diamonds.png";
    images[14] = "2_of_diamonds.png";
    images[15] = "3_of_diamonds.png";
    images[16] = "4_of_diamonds.png";
    images[17] = "5_of_diamonds.png";
    images[18] = "6_of_diamonds.png";
    images[19] = "7_of_diamonds.png";
    images[20] = "8_of_diamonds.png";
    images[21] = "9_of_diamonds.png";
    images[22] = "10_of_diamonds.png";
    images[23] = "jack_of_diamonds.png";
    images[24] = "queen_of_diamonds.png";
    images[25] = "king_of_diamonds.png";
    images[26] = "ace_of_clubs.png";
    images[27] = "2_of_clubs.png";
    images[28] = "3_of_clubs.png";
    images[29] = "4_of_clubs.png";
    images[30] = "5_of_clubs.png";
    images[31] = "6_of_clubs.png";
    images[32] = "7_of_clubs.png";
    images[33] = "8_of_clubs.png";
    images[34] = "9_of_clubs.png";
    images[35] = "10_of_clubs.png";
    images[36] = "jack_of_clubs.png";
    images[37] = "queen_of_clubs.png";
    images[38] = "king_of_clubs.png";
    images[39] = "ace_of_spades.png";
    images[40] = "2_of_spades.png";
    images[41] = "3_of_spades.png";
    images[42] = "4_of_spades.png";
    images[43] = "5_of_spades.png";
    images[44] = "6_of_spades.png";
    images[45] = "7_of_spades.png";
    images[46] = "8_of_spades.png";
    images[47] = "9_of_spades.png";
    images[48] = "10_of_spades.png";
    images[49] = "jack_of_spades.png";
    images[50] = "queen_of_spades.png";
    images[51] = "king_of_spades.png";
    document.getElementById("output").innerHTML = '<img src="/assets/images/CardsDeck/' + images[Math.floor(Math.random() * images.length)] + '" alt="random image" />';
}