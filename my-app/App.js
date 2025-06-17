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

// const Boton = () => {
//   const [texto,setTexto]=useState('Presionar');
//   const cambiarTexto=()=>{setTexto('Presionado')};
//   return (
//     <Button onPress={cambiarTexto} title={texto}></Button>
//   )
// }


export default function App() {
  return (
    <View style={styles.container}>

      <Texto style={styles.morado}> </Texto>
      <Texto style={styles.negro}> </Texto>
      <Texto style={styles.verde}> </Texto>
      {/* <Boton> </Boton> */}
      <StatusBar style='auto'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech', //acomodo izq der (flex-start, flex-end, center) (space-between, space-everly, space-around) (strech)
    justifyContent: 'space-around', //acomodo arriba abajo (flex-start, flex-end, center) (space-between, space-everly, space-around)
    //flexDirection: 'column-reverse'
    //flexDirection: 'row-reverse'
  },
  Text: {
    color: 'white',
    fontSize: 27,
    // height: 120,
    // width: 120,
  },
  morado: {
    backgroundColor: 'purple',
    //flex:3
  },
  verde: {
    backgroundColor: 'green',
    //flex:1
  },
  negro: {
    backgroundColor: 'black',
    //flex:2
  },
});
