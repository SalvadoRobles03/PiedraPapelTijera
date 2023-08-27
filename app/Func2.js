const Func = () =>{
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

  return {getWinner}
};


export default Func;