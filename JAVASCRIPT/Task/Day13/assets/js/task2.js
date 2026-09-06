let title = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  title.textContent = "Dynamic";
  title.style.color = "blue";
  title.classList.add("newStyle");
});
