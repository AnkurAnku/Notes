import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import AddNote from '../screens/AddNote';

const stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="AddNote" component={AddNote} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
