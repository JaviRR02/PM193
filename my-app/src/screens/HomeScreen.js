import React from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

const HomeScreen = () => {
    return (
        <ImageBackground 
            source={require('C:/Users/frank/OneDrive/Documentos/GitHub/PM193/my-app/src/assets/fondo.jpg')}    
            style={styles.background}
        >
            <SafeAreaView style={styles.content}>
                <Text style={styles.text}>Pantalla principal</Text>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'center',
    },
    content: {
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:28,
        fontWeight:'bold'
    }
});