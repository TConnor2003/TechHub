document.write(`
<h1 style="text-align: center;"><a class="home" href="/">TechHub</a></h1>
<div class="sitenav" id="breadcrumb"></div>
`);
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