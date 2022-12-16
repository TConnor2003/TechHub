//random integer between two given numbers animated
function randint() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var num = parseInt(document.getElementById("num").value);
    if (num > 100) {
        alert("Please enter a number less than 100");
        return;
    }
    if (min > max) {
        alert("Please enter a minimum number less than the maximum");
        return;
    }
    var rand = [];
    for (var i = 0; i < num; i++) {
        rand[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.getElementById("output").innerHTML = rand;
}

