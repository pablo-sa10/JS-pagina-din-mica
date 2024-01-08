function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

       /*  if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
        } */
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.remove('ativa');
        } 
    }
}




