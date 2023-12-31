import {View, Text, SafeAreaView, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../StyleSheet/StyleSheet';
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <LinearGradient
      start={{x: 0.0, y: 0}}
      end={{x: 0.0, y: 1.0}}
      colors={['#f0d3af', '#f0d3af', '#ab8c67']}
      style={StyleSheet.splashView}>
      <Animatable.Image
        animation="slideInUp"
        style={StyleSheet.logoimg}
        source={require('../assets/logo.jpg')}></Animatable.Image>

      <Animatable.Text animation="slideInUp" style={StyleSheet.logoname}>
        Notes
      </Animatable.Text>
    </LinearGradient>
  );
}
