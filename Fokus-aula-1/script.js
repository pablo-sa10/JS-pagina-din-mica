const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const somPlay = new Audio('/sons/play.wav')
const pause = new Audio('/sons/pause.mp3')
const beep = new Audio('/sons/beep.mp3')
const iniciar = document.querySelector('#start-pause')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const imgPlayPause = document.querySelector('#start-pause img')
const tempoTela = document.querySelector('#timer')

let tempoSegundos = 1500 
let intervalo = null

musica.loop = true

musicaInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    tempoSegundos = 1500
    alteraContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoSegundos = 300
    alteraContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoSegundos = 900
    alteraContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alteraContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    });
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong"> mergulhe no que importa</strong>`
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superífcie.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoSegundos <= 0) {
        beep.play()
        zerar()
        return
    }
    tempoSegundos -= 1
    mostrarTempo()
}

iniciar.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {

    if (intervalo) {
        pause.play()
        zerar()
        return
    }
    somPlay.play()
    intervalo = setInterval(contagemRegressiva, 1000)
    imgPlayPause.setAttribute('src', '/imagens/pause.png')
    iniciarOuPausarBt.textContent = "Pausar"  
}


function zerar() {
    clearInterval(intervalo)
    imgPlayPause.setAttribute('src', '/imagens/play_arrow.png')
    iniciarOuPausarBt.textContent = "Começar"
    intervalo = null
}

function mostrarTempo(){
    const tempo = new Date(tempoSegundos * 1000)
    const tempoFormtado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFormtado}`
}

mostrarTempo()

