// Declarações de variáveis
const musicPlayer = new Player;
const comecarButton = document.getElementById('startbtn');
const welcomeText = document.getElementById('instructionsText');
const jogoMain = document.getElementById('question-container');
const enviarButton = document.getElementById('submitbtn');
const proximaButton = document.getElementById('nextbtn');
const ouvirButton = document.getElementById('listenbtn');
const respostaTitle = document.getElementById('repostaTitulo');
const respostaPerformer = document.getElementById('repostaArtista');
const pontosTotal = document.getElementById('points');
const errouAmbas = document.getElementById('errou-tudo');
const acertouUma = document.getElementById('acertou-uma');
const acertouAmbas = document.getElementById('acertou-ambas');
const contaRodadas = document.getElementById('contarodadas');
const pontosFinal = document.getElementById('pointsfinal')
const finalText = document.getElementById('fimtxt');
let currentAudio = null;
let isPlaying = false;


// Botões
comecarButton.addEventListener("click", iniciarJogo);
ouvirButton.addEventListener("click", escutarMusica);
proximaButton.addEventListener("click", proximaPergunta);
enviarButton.addEventListener("click", enviarResposta);


// Funções
function iniciarJogo() { // vai dar inicio ao jogo, faz o botão 'Começar' desaparecer.
    musicPlayer.shuffleMusicArray()
    comecarButton.classList.add('hide');
    welcomeText.classList.add('hide');
    jogoMain.classList.remove('hide');
    enviarButton.classList.remove('hide');
    pontosTotal.classList.remove('hide');
}


function escutarMusica() {
    if (currentAudio && !currentAudio.paused) {
        // If audio is playing, pause it
        currentAudio.pause();
        isPlaying = false;
        ouvirButton.innerHTML = '<img id="playbtn" src="./assets/images/playbtn.png"> Aperte para ouvir a música!';
    } else {
        // If no audio is playing or it's paused, play it
        if (currentAudio) {
            // Resume the current audio if it exists
            currentAudio.play();
        } else {
            // Create new audio if none exists
            currentAudio = new Audio(musicPlayer.playSong(musicPlayer.rodada));
            // Add event listener to handle when audio ends naturally
            currentAudio.addEventListener('ended', function() {
                isPlaying = false;
                ouvirButton.innerHTML = '<img id="playbtn" src="./assets/images/playbtn.png"> Aperte para ouvir a música!';
            });
            currentAudio.play();
        }
        isPlaying = true;
        ouvirButton.innerHTML = '<img id="playbtn" src="./assets/images/playbtn.png"> Pausar música';
    }
}

function enviarResposta() {
    if ((respostaTitle.value.toUpperCase() === musicPlayer.correctTitle(musicPlayer.rodada).toUpperCase()) && (respostaPerformer.value.toUpperCase() === musicPlayer.correctPerformer(musicPlayer.rodada).toUpperCase())) {
        musicPlayer.points += 10;
        pontosTotal.innerText = musicPlayer.points;
        
        acertouAmbas.classList.remove('hide');
    } else if ((respostaTitle.value.toUpperCase() === musicPlayer.correctTitle(musicPlayer.rodada).toUpperCase()) || (respostaPerformer.value.toUpperCase() === musicPlayer.correctPerformer(musicPlayer.rodada).toUpperCase())) {
        
        musicPlayer.points += 5;
        pontosTotal.innerText = musicPlayer.points;
        acertouUma.classList.remove('hide');
    } else {
        errouAmbas.classList.remove('hide');
    }
    enviarButton.classList.add('hide');
    proximaButton.classList.remove('hide');
}

function proximaPergunta() {
    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
        isPlaying = false;
        ouvirButton.innerHTML = '<img id="playbtn" src="./assets/images/playbtn.png"> Aperte para ouvir a música!';
    }
    
    musicPlayer.rodada++;
    respostaTitle.value = "";
    respostaPerformer.value = "";
    enviarButton.classList.remove('hide');
    proximaButton.classList.add('hide');
    acertouAmbas.classList.add('hide');
    acertouUma.classList.add('hide');
    errouAmbas.classList.add('hide');
    contaRodadas.innerText = 10 - musicPlayer.rodada;
    if (musicPlayer.rodada === 10) {
        gameOver();
    }
}


function gameOver() {
    // Stop any playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    jogoMain.classList.add('hide');
    enviarButton.classList.add('hide');
    finalText.classList.remove('hide');
    pontosFinal.innerText = musicPlayer.points;
}

