/* Zona 1: Lugar de las importaciones */  
import { StatusBar } from 'expo-status-bar';
import {View, TextInput, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React, { useState } from 'react';


/* Zona 2: Main */
export default function App() {
  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta básica');
  };
  return (
    <View style={styles.container}>
      <Button title='Alerta basica' onPress={AlertaBasica}></Button>
    </View>
  );
}

/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
});