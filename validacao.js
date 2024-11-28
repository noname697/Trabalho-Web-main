function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroForMaioOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        switch (numeroMaximo) {
            case 100:
                document.body.innerHTML = `
                    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
            margin: 50px auto;
            text-align: center;
        }

        h1 {
            color: #0066cc;
            margin-bottom: 20px;
        }

        .nivel {
            display: inline-block;
            width: 250px;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .facil {
            background-color: #cce5ff;
        }

        .premio {
            font-size: 18px;
            color: #00509e;
            font-weight: bold;
        }

        .nivel:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }

        .nivel img {
        width: 50%
        }
    </style>

    <div class="container">
        <h1>Nível Fácil - Recompensas</h1>

        <div class="nivel facil">
            <h2>Prêmio Normal</h2>
            <p class="premio">Você ganhou um Drone de Câmera de Alta Qualidade!</p>
            <img src="https://blog.lojadji.com.br/wp-content/uploads/2024/08/D-4125-Escolhendo-o-Drone-DJI-com-a-Melhor-Camera-para-suas-Necessidades.jpg">
        </div>
    </div>
                `
                break
            case 500:
                document.body.innerHTML = `
                    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
            margin: 50px auto;
            text-align: center;
        }

        h1 {
            color: #0066cc;
            margin-bottom: 20px;
        }

        .nivel {
            display: inline-block;
            width: 250px;
            padding: 20px;
            margin: 20px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .medio {
            background-color: #66b3ff;
        }

        .premio {
            font-size: 18px;
            color: #00509e;
            font-weight: bold;
        }

        .nivel:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }

        .nivel img {
        width: 50%
        }
    </style>

    <div class="container">
        <h1>Nível Médio - Recompensas</h1>

        <div class="nivel medio">
            <h2>Prêmio Bom</h2>
            <p class="premio">Você ganhou um Iphone 15!</p>
            <img src="https://a-static.mlcdn.com.br/1500x1500/apple-iphone-15-128gb-preto-61-48mp-ios-5g/magazineluiza/238035600/ca34b876507bd1632d01745750e0e3f7.jpg">
        </div>

    </div>
                `
                break
            case 1000:
                document.body.innerHTML = `
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f4f8;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }

                    .container {
                        width: 80%;
                        margin: 50px auto;
                        text-align: center;
                    }

                    h1 {
                        color: #0066cc;
                        margin-bottom: 20px;
                    }

                    .nivel {
                        display: inline-block;
                        width: 250px;
                        padding: 20px;
                        margin: 20px;
                        border-radius: 8px;
                        background-color: #ffffff;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }

                    .dificil {
                        background-color: #3399ff;
                    }

                    .premio {
                        font-size: 18px;
                        color: #00509e;
                        font-weight: bold;
                    }

                    .nivel:hover {
                        transform: scale(1.05);
                        transition: transform 0.3s ease;
                    }

                    .nivel img {
                        width: 50%
                    }
                </style>

                <div class="container">
                    <h1>Nível Difícil - Recompensas</h1>
                    <div class="nivel dificil">
                        <h2>Prêmio incrível</h2>
                        <p class="premio">Você ganhou uma Porsche 911 Turbo S!</p>
                        <img src="https://bocamafrapremium.com.br/wp-content/uploads/2024/11/884aefbbc8e2426bbb27329f06ea374c_1712430190758.jpg">
                    </div>
                </div>
                `
                break
        }
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
                <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
                <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div> 
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaioOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

// alert('Ligue seu microfone!🎤🎙️')