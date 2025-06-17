import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


//componente Propio Texto
const Texto = () => {
  const[contenido,setContenido]=useState('Hola Mundo');
  const actualizaTexto=()=>{setContenido('Estado Modificado')};
  return(
    <Text onPress={actualizaTexto}> {contenido} </Text>
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

      <Texto> </Texto>
      <Texto> </Texto>
      <Texto> </Texto>
      <Boton> </Boton>
      <StatusBar style='auto'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
