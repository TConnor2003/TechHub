window.onload = loadpage;
function loadpage() {
/*     loadheader(); */
    loadfooter();
}

//load the footer on every page
function loadfooter() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		document.getElementById("footer").innerHTML = this.responseText;
	};
	xhttp.open("GET", "/templates/footer.html");
	xhttp.send();
}

//load the header on every page
function loadheader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("header").innerHTML = this.responseText;
    };
    xhttp.open("GET", "/templates/header.html");
    xhttp.send();
}

