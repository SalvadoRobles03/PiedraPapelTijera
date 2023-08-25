import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import Func from './Func';


const Boton = ({ option, Img }) => { 
  const{Elegir_PC}=Func('');
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

const styles = StyleSheet.create({
  opcionButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default Boton;
