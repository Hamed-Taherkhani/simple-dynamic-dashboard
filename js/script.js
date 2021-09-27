const main = document.querySelector("main"),
  navItems = document.querySelectorAll("aside nav ul li");

navItems.forEach((value) => {
  value.addEventListener("click", loadDoc);
});

function loadDoc() {
  const xhr = new XMLHttpRequest(),
    fileName = this.children[1].textContent.toLowerCase();
  url = "./Single page/" + fileName + ".txt";
  console.log(url);
  xhr.onload = () => placeOnPage(xhr.responseText);
  xhr.open("GET", url, true);
  xhr.send();
}

function placeOnPage(res) {
  console.log(res);
  main.innerHTML = res;
  const script = document.getElementById("script");
  eval(script.textContent);
}
