const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");
const botaoModo = document.querySelector("#botaoModo");


botao.addEventListener("click", function () {
    titulo.textContent = "Você clicou no botão!";

    texto.textContent = "O JavaScript alterou este parágrafo usando o DOM.";

    titulo.style.color = "#e11d48";

    mensagem.textContent = "Tudo certo! As alterações foram bem-sucedidas!";
});

// Botão que muda para o modo escuro
botaoModo.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});