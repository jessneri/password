const input = document.querySelector("input");
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text")
        botao.innerText = "Esconder senha!"
    } else {
        input.setAttribute("type", "password")
        botao.innerText = "Mostrar senha!"
    }
});