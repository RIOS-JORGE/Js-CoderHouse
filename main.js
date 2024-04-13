//Juego de Adivinar un número aleatorio

//Declaracion de variables
const jugar = document.querySelector('.jugar');
const NumeroAleatorio = Math.floor(Math.random()*100);
const Arr = [];
const Intentos = 10;
const Regex = /[0-9]+/;
let contador = 0;

//Creacion de la funcion para jugar
const AdivinaElNumero = () => {

// Se pide al Jugador que ingrese un numero entre 0 y 100
let numeroJugador = prompt('Adivina el Número entre 0 y 100');

// Se crea un bucle hasta que el Jugador adivine el numero aleatorio
while (numeroJugador != NumeroAleatorio) {

  //Array para guardar los numeros ingresados por el Jugador
  Arr.push(numeroJugador);

  // Se crea un condicional para orientar al Jugador si el numero ingresado es mayor o menor que el numero aleatorio
  if(contador != Intentos){
    if (Number(numeroJugador) > NumeroAleatorio) {
      numeroJugador = prompt('El número ingresado es mayor que el numero Aleatorio');
      contador++
    }
    else if (Number(numeroJugador) < NumeroAleatorio) {
      numeroJugador = prompt('El número ingresado es menor que el numero Aleatorio');
      contador++
    }
      //Se crea un condicional para no ingresar letras
    else if (!Regex.test(numeroJugador)) {
      numeroJugador = prompt('No ingresaste un número')
    }
    
  }
  
  //Se crea un condicional para informar que el Jugador Perdio, por consola se muestran el numero Aleatorio y los numeros ingresados
  else if (contador == Intentos) {
    alert('perdiste')
    console.log('perdiste')
    console.log('Estos son los numeros ingresados: ' + Arr);
    contador = 0;
    break;
  }
  
}

//Se crea un condicional para informar que el Jugador Gano, por consola se muestran el numero Aleatorio y los numeros ingresados
if (Number(numeroJugador) == NumeroAleatorio) {
  alert('Ganaste, el número Aleatorio era: ' + numeroJugador);
  console.log('Número aleatorio: ' + NumeroAleatorio);
  console.log('Ganaste, el número Aleatorio era: ' + numeroJugador);
  Arr.push(numeroJugador)
  console.log('Estos son los numeros ingresados: ' + Arr);
 contador = 0;
}
}


//Inicia el Juego

jugar.addEventListener('click', AdivinaElNumero);
