import {useState}  from 'react';

const Func = () =>{
  
const opciones = ['piedra', 'papel', 'tijeras'];
let [Eleccion_Jugador, setEleccion_Jugador] = useState(null);
let [Eleccion_Bot, setEleccion_Bot] = useState(null);
let [winner, setWinner] = useState(null);

function getWinner(Eleccion_Jugador, Eleccion_Bot){
  if (Eleccion_Jugador === Eleccion_Bot) {
    return 'Empate';
  }
  if (
    (Eleccion_Jugador === 'piedra' && Eleccion_Bot === 'tijeras') ||
    (Eleccion_Jugador === 'papel' && Eleccion_Bot === 'piedra') ||
    (Eleccion_Jugador === 'tijeras' && Eleccion_Bot === 'papel')
  ) {
    return 'Ganaste';
  }
  return 'Perdiste';
};


  function Elegir_PC(opcion){
    const random = Math.floor(Math.random() * opciones.length);
    const Choice_Bot = opciones[random];
    setEleccion_Jugador(opcion);
    console.log(Eleccion_Jugador);
    setEleccion_Bot(Choice_Bot);
    console.log(Eleccion_Bot);
    setWinner(getWinner(Eleccion_Jugador, Eleccion_Bot));
    console.log(winner);

  };

return{opciones,Eleccion_Jugador,Eleccion_Bot,winner,Elegir_PC}

}

export default Func;