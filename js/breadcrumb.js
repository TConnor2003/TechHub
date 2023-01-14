document.write(`
<h1 style="text-align: center;"><a id="logo" class="home" href="/">TechHub</a></h1>
<div class="sitenav" id="breadcrumb"></div>
`);
//get url of webpage and split into variables
var url = window.location.href;
var urls = url.split("/");
urls.splice(0, 1);
urls[0] = "";
urls[1] = "";
urls[urls.length - 1] = urls[urls.length - 1].split(".")[0];
console.log(urls);

//create <a> tags for each variable separated by /
var breadcrumb = document.getElementById("breadcrumb");
for (var i = 2; i < urls.length; i++) {
	var a = document.createElement("a");
	a.href =
		"https://" + urls[0] + "tech.craftyplayz.com" + urls.slice(1, i + 1).join("/");
	a.innerHTML = urls[i];
	breadcrumb.appendChild(a);
}
//write hello there between every <a> tag in the breadcrumb div except for id logo and the last one
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
	if (a[i].id != "logo" && i != a.length - 1) {
		a[i].insertAdjacentHTML("afterend", " > ");
	}
}

//set the last <a> tag to the title of the webpage
var title = document.title;
a[a.length - 1].innerHTML = title;





