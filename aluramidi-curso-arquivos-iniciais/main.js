function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0

while(contador < listaTeclas.length){

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];  
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador++;

    
}




