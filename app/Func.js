import {useState}  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';



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

  const Boton = ({ option, Img }) => { 
  
    return (
      <View>
        <TouchableOpacity
          style={styles.opcionButton}
          onPress={() => Elegir_PC(option)}
        >
          <Image source={Img} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
    );
  };

  
  
return{opciones,Eleccion_Jugador,Eleccion_Bot,winner,Elegir_PC,Boton}

}

const styles=StyleSheet.create({
  opcionButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  }
});


export default Func;