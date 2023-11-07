import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import AddNote from '../screens/AddNote';
import Practice from '../screens/Practice';

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
        <stack.Screen name="Practice" component={Practice} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
