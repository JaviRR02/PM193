import React, { useState } from 'react';
import {View,Text,StyleSheet,ImageBackground,SafeAreaView,TextInput,Switch,Button,Alert,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [emailText, setEmailText] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const ValidarRegistro = () => {
    if (!username || !emailText) {
      Alert.alert('Alerta', 'No se ha llenado alguno de los campos');
      return;
    }
    if (!acceptTerms) {
      Alert.alert('Alerta', 'No se han aceptado los términos y condiciones');
      return;
    }
    if (!isValidEmail(emailText)) {
      Alert.alert('Alerta', 'Ingresa un correo válido');
      return;
    }
    Alert.alert(
      'Registro exitoso',
      `Usuario registrado exitosamente\nUsuario: ${username}\nCorreo: ${emailText}`
    );
  };

  return (
    <ImageBackground
      source={require('../assets/fondoLanaApp.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            autoCapitalize="words"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={[
              styles.input,
              emailText && !isValidEmail(emailText) && styles.errorInput,
            ]}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={emailText}
            onChangeText={setEmailText}
          />

          <View style={styles.switchRow}>
            <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
            <Text style={styles.switchLabel}>
              Aceptar términos y condiciones
            </Text>
          </View>

          <Button title="Registrar" color="#007bff" onPress={ValidarRegistro} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    width,
    height,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: 'red',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabel: {
    color: '#fff',
    marginLeft: 10,
  },
});
