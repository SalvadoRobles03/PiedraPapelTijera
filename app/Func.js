import {useState}  from 'react';

const Func = () =>{
  
  const opciones = ['piedra', 'papel', 'tijeras'];
  const [Eleccion_Jugador, setEleccion_Jugador] = useState('');
  const [Eleccion_Bot, setEleccion_Bot] = useState('');
  const [winner, setWinner] = useState('');

  function getWinner(Eleccion_Jugador, Eleccion_Bot){
    setEleccion_Jugador(Eleccion_Jugador);
    setEleccion_Bot(Eleccion_Bot);

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
    var Choice_Bot = opciones[random];
    var option=opcion;
    setEleccion_Jugador(option);
    setEleccion_Bot(Choice_Bot);
    setWinner(getWinner(option, Choice_Bot));

    console.log(Eleccion_Jugador);
    console.log(Eleccion_Bot);
    console.log(winner);

    
  };

  
  
return{opciones,Eleccion_Jugador,Eleccion_Bot,winner,Elegir_PC}

}

export default Func;