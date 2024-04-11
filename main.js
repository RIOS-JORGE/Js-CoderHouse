const jugar = document.querySelector('.jugar');
const NumeroAleatorio = Math.floor(Math.random()*100);
const Arr = [];
const Intentos = 10;
const Regex = /[0-9]+/;
let contador = 0;



const AdivinaElNumero = () => {

let numeroUsuario = prompt('Adivina el Número');

while (numeroUsuario != NumeroAleatorio) {
  
  Arr.push(numeroUsuario);
  
  if(contador != Intentos){
    if (Number(numeroUsuario) > NumeroAleatorio) {
      numeroUsuario = prompt('Tu número es mayor');
      contador++
    }
    else if (Number(numeroUsuario) < NumeroAleatorio) {
      numeroUsuario = prompt('Tu número es menor');
      contador++
    }
    else if (!Regex.test(numeroUsuario)) {
      numeroUsuario = prompt('No ingresaste un número')
    }
    
  }
  
  else if (contador == Intentos) {
    alert('perdiste')
    console.log('perdiste')
    console.log('Estos son los numeros ingresados: ' + Arr);
    contador = 0;
    break;
  }
  
}



if (Number(numeroUsuario) == NumeroAleatorio) {
  alert('Ganaste, el número Aleatorio era: ' + numeroUsuario);
  console.log('Número aleatorio: ' + NumeroAleatorio);
  console.log('Ganaste, el número Aleatorio era: ' + numeroUsuario);
  Arr.push(numeroUsuario)
  console.log('Estos son los numeros ingresados: ' + Arr);
 contador = 0;
}
}

jugar.addEventListener('click', AdivinaElNumero);
