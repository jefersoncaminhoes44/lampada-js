const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampReset (){ //para quando lampada estiver quebrada
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn (){
    if ( !lampReset() ) {
        lamp.src = 'img/acesa.jpeg';
    }
}

function lampOff(){
    if ( !lampReset() ) {   
        lamp.src = 'img/lampada.jpeg';
    }
}

function lampBroken(){ //Quebra a lampada quando passa com mouse por cima
    lamp.src = 'img/quebrada.jpeg'
}

turnOn.addEventListener ('click', lampOn); //Liga lampada no botão
turnOff.addEventListener ('click', lampOff); //Desliga lampada no botão
lamp.addEventListener('mouseover', lampOn); // Ascende lampada quando passa mouse 
lamp.addEventListener('mouseleave', lampOff); // Desliga lampada quando tira mouse 
lamp.addEventListener('dblclick', lampBroken);