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
        
        {/* Boton 1 */}
        <View style={styles.section}>
          <Text style={styles.title}>Primer Boton</Text>    
          <Button style={styles.btn} title="Boton nativo" color="#007bff" onPress={() => window.alert('Boton nativo presionado')}>
          </Button>

        </View>

        {/* Boton 2 */}
        <View style={styles.section}>
          <Text style={styles.title}>Boton 2</Text>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#28a745'}]} onPress={() => window.alert('TouchableOpacity')}>
            <Text style={styles.btnText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        {/* Boton 3 */}
        <View style={styles.section}>
          <Text style={styles.title}>Boton 3</Text>
          <TouchableHighlight style={[styles.btn, {backgroundColor: '#ffc107'}]} underlayColor='#e0a800' onPress={() => window.alert('Boton 3')}>
            <Text style={styles.btnText}>TouchableHighlight</Text>
          </TouchableHighlight>
        </View>

        {/* Boton 4 */}
        <View style={styles.section}>
          <Text style={styles.title}>Boton 4</Text>
          <TouchableNativeFeedback style={styles.btn} onPress={() => window.alert('Boton 4')}>
          </TouchableNativeFeedback>
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
  btn: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
