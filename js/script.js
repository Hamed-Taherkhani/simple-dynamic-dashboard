const main = document.querySelector("main"),
  navItems = document.querySelectorAll("aside nav ul li");

// To load dashboard as default page:
document.body.onload = () => loadDoc("dashboard", "html", placeHtml);

navItems.forEach((value) => {
  value.addEventListener("click", configRequest);
});

let fileName;
function configRequest() {
  fileName = this.children[1].textContent.toLowerCase();
  loadDoc(fileName, "html", placeHtml);
}

function loadDoc(fileName, type, callBackFunction) {
  let URL = "./Pages/";
  if (type === "html") URL += fileName + "." + type;
  if (type === "css" || type === "js")
    URL += type + "/" + fileName + "." + type;

  const xhr = new XMLHttpRequest();
  xhr.onload = () => callBackFunction(xhr.responseText, fileName);
  xhr.open("GET", URL, true);
  xhr.send();
}

function placeHtml(response, fileName) {
  main.innerHTML = response;
  loadDoc(fileName, "css", placeCss);
}

function placeCss(response, fileName) {
  const styleTag = document.getElementById("style__");
  styleTag.innerHTML = response;
  loadDoc(fileName, "js", placeJS);
}

function placeJS(response) {
  // Run the response string as a executable javascript code.
  const cdns = document.getElementsByClassName("js-cdn");
  let script = document.createElement("script");
  script.setAttribute("src", cdns[0].src);
  main.appendChild(script);
  script.onload = () => eval(response);
}
