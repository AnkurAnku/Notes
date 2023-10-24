import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../StyleSheet/StyleSheet';

export default function GridView(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddNote')}
      style={StyleSheet.ComponentView}>
      <LinearGradient
        start={{x: 0.0, y: 0}}
        end={{x: 0.0, y: 1.0}}
        colors={['#f0d3af', '#f0d3af', '#ab8c67']}
        style={{
          padding: 15,
        }}>
        <Text numberOfLines={4} style={StyleSheet.TextDateTime}>
          10 Nov 2023, 08:00am
        </Text>
        <Text numberOfLines={1} style={StyleSheet.TittleText}>
          {props.tittle}
        </Text>

        <Text numberOfLines={4} style={StyleSheet.DescriptionText}>
          {props.description}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
