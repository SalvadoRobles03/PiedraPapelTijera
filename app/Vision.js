import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Boton from './boton';
import Func from './Func';



const Vision = () => {
  
  const { opciones,Eleccion_Jugador,Eleccion_Bot,winner} = Func("");

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Piedra, Papel o Tijeras </Text>
        <Text style={styles.subtitle}>Alejandro Robles </Text>
        <Text style={styles.subtitle}>A01562588</Text>
        <View style={styles.opcionesContainer}>
          <Boton option={opciones[0]} Img={require('../Img/piedra.png')} />
          <Boton option={opciones[1]} Img={require('../Img/papel.png')} />
          <Boton option={opciones[2]} Img={require('../Img/tijera.png')} />
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Jugador: {Eleccion_Jugador}</Text>
          <Text style={styles.resultText}>Computadora: {Eleccion_Bot}</Text>
          <Text style={styles.resultText}>Ganador: {winner}</Text>
        </View>
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
  
  export default Vision;
  
  