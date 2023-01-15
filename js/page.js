//run function on page load
window.onload = loadpage;

function loadpage() {
	//write the header menu in html after the body tag with insertAdjacentHTML
	document.body.insertAdjacentHTML(
		"afterbegin",
		`
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYYQYWWEMP"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
        
            gtag('config', 'G-KYYQYWWEMP');
        </script>
        <header>
            <h1 style="text-align: center;"><a id="logo" class="home" href="/">TechHub</a></h1>
            <div class="sitenav" id="breadcrumb"></div>
        </header>
    `
	);

	//link to the css file in the head tag with insertAdjacentHTML
	document.head.insertAdjacentHTML(
		"beforeend",
		`
    <link rel="stylesheet" href="/css/global.css">
    `
	);

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
		a.href = "https://" + urls[0] + "tech.craftyplayz.com" + urls.slice(1, i + 1).join("/");
		a.innerHTML = urls[i];
		breadcrumb.appendChild(a);
	}
	//write > between every <a> tag in the breadcrumb div except for id logo and the last one
	var a = document.getElementsByTagName("a");
	for (var i = 0; i < a.length; i++) {
		if (a[i].id != "logo" && i != a.length - 1) {
			a[i].insertAdjacentHTML("afterend", " > ");
		}
	}

	//set the last <a> tag to the title of the webpage
	var title = document.title;
	a[a.length - 1].innerHTML = title;
	//if no title is set, set the last <a> tag current page
	if (title == "") {
		a[a.length - 1].innerHTML = "Untitled Page";
	}

	//write the footer menu in html before the /body tag with insertAdjacentHTML
	document.body.insertAdjacentHTML(
		"beforeend",
		`
        <footer>
    <a href="/">Home</a> |
    <a href="/tools">Tools</a> |
    <a href="/conversions">Conversions</a> |
    <a href="/calculator">Calculators</a> |
    <a href="/cookies">Cookies</a><br>
    <a href="/copyright">© 2022 - <script>new Date().getFullYear()>document.write(new Date().getFullYear());</script> Crafty Playz</a>
    </footer>
    `
	);
}
