const para = document.getElementById("text");
const button = document.getElementById("toggleBtn");

button.addEventListener("click",() => {
    para.classList.toggle("show");
});