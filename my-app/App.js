import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


//componente Propio Texto
const Texto = ({style}) => {
  const[contenido,setContenido]=useState('Hola Mundo');
  const actualizaTexto=()=>{setContenido('Estado Modificado')};
  return(
    <Text style={[styles.Text, style]} onPress={actualizaTexto}> {contenido} </Text>
  )
}

const Boton = () => {
  const [texto,setTexto]=useState('Presionar');
  const cambiarTexto=()=>{setTexto('Presionado')};
  return (
    <Button onPress={cambiarTexto} title={texto}></Button>
  )
}


export default function App() {
  return (
    <View style={styles.container}>

      <Texto style={styles.morado}> </Texto>
      <Texto style={styles.negro}> </Texto>
      <Texto style={styles.verde}> </Texto>
      <Boton> </Boton>
      <StatusBar style='auto'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontSize: 27,
  },
  morado: {
    backgroundColor: 'purple'
  },
  verde: {
    backgroundColor: 'green'
  },
  negro: {
    backgroundColor: 'black'
  },
});
