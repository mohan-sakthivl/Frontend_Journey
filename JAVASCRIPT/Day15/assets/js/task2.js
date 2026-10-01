const box = document.getElementById("box");
const button = document.getElementById("colorBtn");

button.addEventListener("click", function () {
    box.classList.toggle("green");
});