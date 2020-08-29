const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.setAttribute("type", "text");
});

input.addEventListener("blur", () => {
    input.setAttribute("type", "password");
});