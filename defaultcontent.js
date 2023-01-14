
document.getElementById("footer").innerHTML = `

<a href="/">Home</a> |
<a href="/tools">Tools</a> |
<a href="/conversions">Conversions</a> |
<a href="/calculator">Calculators</a> |
<a href="/cookies">Cookies</a><br>
<a href="/copyright">© 2022 - <script>new Date().getFullYear()>document.write(new Date().getFullYear());</script> Crafty Playz</a>

`;


document.getElementById("header").innerHTML = `
<h1 style="text-align: center;"><a class="home" href="/">TechHub</a></h1>
<div class="sitenav" id="breadcrumb"></div>
`;

window.onload = function () {
	//get url of webpage and split into variables
	var url = window.location.href;
	var urls = url.split("/");
	urls.splice(0, 2);
	urls[0] = "";
	console.log(urls);
	//create <a> tags for each variable separated by /
	var breadcrumb = document.getElementById("breadcrumb");
	for (var i = 0; i < urls.length; i++) {
		var a = document.createElement("a");
		a.href =
			"https://" + urls[0] + "tech.craftyplayz.com" + urls.slice(0, i + 1).join("/");
		a.innerHTML = urls[i];
		breadcrumb.appendChild(a);
	}
};	