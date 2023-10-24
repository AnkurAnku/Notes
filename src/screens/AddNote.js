import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../StyleSheet/StyleSheet';

export default function AddNote({navigation}) {
  return (
    <SafeAreaView style={StyleSheet.SafeView}>
      <View style={StyleSheet.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={StyleSheet.BackIcon}
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={StyleSheet.CheckIcon}
            source={require('../assets/check.png')}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        start={{x: 0.0, y: 0}}
        end={{x: 0.0, y: 1.0}}
        colors={['#f0d3af', '#f0d3af', '#ab8c67']}
        style={StyleSheet.NoteBackColor}>
        <View style={StyleSheet.NoteView}>
          <Text style={StyleSheet.DateText}>October 20, 2023</Text>
          <TextInput
            selectionColor="brown"
            multiline
            maxLength={75}
            placeholder="Title"
            style={StyleSheet.NoteTitle}
          />
          <TextInput
            selectionColor="brown"
            multiline
            placeholder="Write a note....."
            style={StyleSheet.NoteDescription}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
