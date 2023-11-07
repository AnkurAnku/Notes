import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../StyleSheet/StyleSheet';
import colours from '../global/colours';

export default function GridView(props) {
  const navigation = useNavigation();

  const removeItem = () => {
    Alert.alert('Delete', 'Are you sure delete this note?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Ok',
        onPress: props.del,
      },
    ]);
  };
  const {OnClick} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AddNote', {
          item: OnClick,

          index: props.index,
        });
      }}
      style={[StyleSheet.ComponentView, {borderColor: colours().primary}]}>
      <LinearGradient
        start={{x: 0.0, y: 0}}
        end={{x: 0.0, y: 1.0}}
        colors={[
          colours().primaryGradient1,
          colours().primaryGradient2,
          colours().primaryGradient3,
        ]}
        style={{minHeight: 120, maxHeight: 120, padding: 10}}>
        <Text
          numberOfLines={1}
          style={[StyleSheet.TextDateTime, {color: colours().primary}]}>
          {props.date}
        </Text>
        <Text numberOfLines={1} style={StyleSheet.TittleText}>
          {props.tittle}
        </Text>

        <Text
          numberOfLines={2}
          style={[StyleSheet.DescriptionText, {color: colours().primary}]}>
          {props.description}
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', bottom: 8, right: 5}}
          onPress={() => removeItem()}>
          <Image
            style={StyleSheet.DeleteIcon}
            source={require('../assets/delete.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
}
