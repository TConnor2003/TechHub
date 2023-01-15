//clears output div
function clear() {
  document.getElementById("output").innerHTML = "";
}
//random integer between two given numbers
function randint() {
  clear();
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);
  var num = parseInt(document.getElementById("num").value);
  if (num > 100) {
    alert("Cannot generate more than 100 numbers at a time\nThis may be increased in the future if requested"); 
    return;
  }
  if (min > max) {
    alert("Please enter a minimum number less than the maximum");
    return;
  }
  //if no minimum number is specified alert user
  if (isNaN(min)) {
    alert("Please enter a minimum number");
    return;
  }
  //if no maximum number is specified alert user
  if (isNaN(max)) {
    alert("Please enter a maximum number");
    return;
  }
  //if amount of numbers to generate is not specified, default to 1
  if (isNaN(num)) {
    num = 1;
  }
//generate random numbers in seperate divs
  for (var i = 0; i < num; i++) {
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("output").innerHTML += "<div class='rand' onclick='copy()'>" + rand + "</div>";
    //set div with id="copied" to display block
    document.getElementById("copied").style.display = "block";
    
  }
}
//use navigator.clipboard to copy text to clipboard then turn the number green if another number is copied, turn the previous number black again
function copy() {
  navigator.clipboard.writeText(event.target.innerHTML);
  event.target.style.color = "black";
  var rand = document.getElementsByClassName("rand");
  for (var i = 0; i < rand.length; i++) {
    if (rand[i] != event.target) {
      rand[i].style.color = "white";
    }
  }
}