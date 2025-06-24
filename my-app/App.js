/* Zona 1: Lugar de las importaciones */  
import { StatusBar } from 'expo-status-bar';
import {View, TextInput, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React, { useState } from 'react';


/* Zona 2: Main */
export default function App() {
  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta básica');
  };

  const AlertaConfirmacion = () => {
    const confirmacion = window.confirm('Gus es Gustambo?');
    if (confirmacion) {
      window.alert('Exactamente');
    } else {
      window.alert('Como que no!');
    }
  };

  const AlertaTexto = () => {
    const confirmacion = window.confirm('Erick esta aqui?');
    if (confirmacion) {
      window.alert(`Exactamente, ${confirmacion}`);
    }
    else {
      window.alert('Como que no!');
    }
  };

  const AlertConfirmacion = () => {
    const confirmacion = window.prompt('Que edad tienes?');
    const numero = parseInt(confirmacion);
    if (numero >= 1 && numero <= 70) {
      window.alert(`Tu edad es, ${numero}`);
    }
    else {
      window.alert('Edad incorrecta, como fallas en esto?');
    }
  };

  const AlertaTiempo = () => {
    setTimeout(() => {
      window.alert('Han pasado 5 segundos');
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Button title='Alerta basica' onPress={AlertaBasica}></Button>
      <Button title='Alerta confirmacion' onPress={AlertaConfirmacion}></Button>
      <Button title='Alerta texto' onPress={AlertaTexto}></Button>
      <Button title='Alerta edad' onPress={AlertConfirmacion}></Button>
      <Button title='Alerta tiempo' onPress={AlertaTiempo}></Button>
    </View>
    )
};

/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
});