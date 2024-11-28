const form = document.querySelector("form")

let dificuldade
var numeroMaximo = 0

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    dificuldade = formData.get('dificuldade');

    definirDificuldade(dificuldade);

    localStorage.setItem('numeroMaximo', numeroMaximo)
    console.log(numeroMaximo)

    window.location.href = "./jogo.html";

})




function definirDificuldade(dificuldade) {
    if (dificuldade === "facil") {
        numeroMaximo = 100
    } else if (dificuldade === "medio") {
        numeroMaximo = 500
    } else {
        numeroMaximo = 1000
    }

}

