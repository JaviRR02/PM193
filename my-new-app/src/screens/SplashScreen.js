import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo_LanaApp.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>
                Bienvenido a LanaApp
            </Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5ba26f',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:200,
        height:200
    },
    title:{
        marginTop:20,
        color: '#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }
});