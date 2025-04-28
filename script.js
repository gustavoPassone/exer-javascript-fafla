const divContainer = document.querySelector(".container")

const btns = [
    {
        nome: "Soma",
        func: soma
    },
    {
        nome: "Divisão",
        func: divisao
    },
    {
        nome: "Subtração",
        func: subtracao
    },
    {
        nome: "Multiplicação",
        func: multiplicacao
    },
    {
        nome: "IMC",
        func: imc
    }
]

function soma() {
alert("soma")
}

function divisao() {
    alert("Divisao")
}

function multiplicacao() {
    alert("multiplcaao")
}

function subtracao() {
    alert("subtrtacao")
}

function imc() {
    alert('imc')
}

btns.forEach((btn) => {
    const btnExercicio = document.createElement('button')
    btnExercicio.textContent = btn.nome
    btnExercicio.addEventListener('click', btn.func)

    divContainer.appendChild(btnExercicio)
});