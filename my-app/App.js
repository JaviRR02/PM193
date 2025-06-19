import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, ScrollView, 
        TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, 
        Pressable, Switch } from 'react-native';
import React, {useState} from 'react';
import { Button as ButonPaper, Provider as ProveedorPaper } from 'react-native-paper';
import { Button as ButonElements } from 'react-native-elements';

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const alternarModoOscuro = () => setModoOscuro(previo => !previo);

  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={[styles.container, {backgroundColor: modoOscuro ? '#111' : '#fff'}]}></View>
        <View styles={styles.container}>
            <Text styles={styles.title}>Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
            <Switch value={modoOscuro} onValueChange={alternarModoOscuro}></Switch>  
        </View>
      </ScrollView>
    </ProveedorPaper>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color:'#000',
  },
  section:{
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
});
