import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const opciones = ['piedra', 'papel', 'tijeras'];

const getWinner = (Eleccion_Jugador, Eleccion_Bot) => {
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

export default function App() {
  const [Eleccion_Jugador, setEleccion_Jugador] = useState(null);
  const [Eleccion_Bot, setEleccion_Bot] = useState(null);
  const [winner, setWinner] = useState(null);

  const Elegir_PC = (opcion) => {
    const random = Math.floor(Math.random() * opciones.length);
    const Eleccion_Bot = opciones[random];
    setEleccion_Jugador(opcion);
    setEleccion_Bot(Eleccion_Bot);
    setWinner(getWinner(opcion, Eleccion_Bot));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel o Tijeras </Text>
      <Text style={styles.subtitle}>Alejandro Robles </Text>
      <Text style={styles.subtitle}>A01562588</Text>
      <View style={styles.opcionesContainer}>
          <TouchableOpacity
            key={opciones[0]}
            style={styles.opcionButton}
            onPress={() => Elegir_PC(opciones[0])}
          >
           <Image source={require('./Img/piedra.png')} style={{ width: 50, height: 50 }} />


          </TouchableOpacity>
          <TouchableOpacity
            key={opciones[1]}
            style={styles.opcionButton}
            onPress={() => Elegir_PC(opciones[1])}
          >
            <Image source={require('./Img/papel.png')} style={{ width: 50, height: 50 }} />

          </TouchableOpacity>
          <TouchableOpacity
            key={opciones[2]}
            style={styles.opcionButton}
            onPress={() => Elegir_PC(opciones[2])}
          >
            <Image source={require('./Img/tijera.png')} style={{ width: 50, height: 50 }} />

          </TouchableOpacity>
        
      </View>
      {winner && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Jugador: {Eleccion_Jugador}</Text>
          <Text style={styles.resultText}>Computadora: {Eleccion_Bot}</Text>
          <Text style={styles.resultText}>Ganador: {winner}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 5,
    color: 'white',
  },
  opcionesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  opcionButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  opcionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});



