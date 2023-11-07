import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../StyleSheet/StyleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import colours from '../global/colours';

var List = [];
export default function AddNote({navigation}) {
  const route = useRoute();
  let index = route?.params?.index;

  let previousItem = {
    title: route?.params?.item?.title,
    description1: route?.params?.item?.description,
  };
  const [title, setTitle] = useState(
    previousItem.title ? previousItem.title : '',
  );
  const [description1, setDescription1] = useState(
    previousItem.description1 ? previousItem.description1 : '',
  );
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(getCurrentDate);
  });

  const saveNotes = async () => {
    if (title === '') {
      Alert.alert('Alert', 'Type a Title ');
    } else if (description1 === '') {
      Alert.alert('Alert', 'Type a Description ');
    } else fetchData();
  };

  const fetchData = async () => {
    const Notes = await AsyncStorage.getItem('noteList');
    const list = JSON.parse(Notes);

    {
      list ? (List = [...list]) : null;
    }
    if (index == -1) {
      saveData(List);
    } else if (index > -1) {
      let newList = List.reverse();
      newList.splice(index, 1);
      newList.reverse();
      saveData(newList);
    }
  };

  const saveData = async List => {
    const obj = {
      title: title,
      description: description1,
      date: date,
    };

    List.push(obj);

    const Update = JSON.stringify(List);

    AsyncStorage.setItem('noteList', Update);
    navigation.goBack();
  };

  const getCurrentDate = () => {
    let dayTime = new Date().getTime();
    return moment(dayTime).format('DD MMM,YYYY hh:mm A');
  };

  return (
    <SafeAreaView style={StyleSheet.SafeView}>
      <View>
        <View style={StyleSheet.toptab}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={StyleSheet.BackIcon}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveNotes()}>
            <Image
              style={StyleSheet.CheckIcon}
              source={require('../assets/check.png')}
            />
          </TouchableOpacity>
        </View>
        <LinearGradient
          start={{x: 0.0, y: 0}}
          end={{x: 0.0, y: 1.0}}
          colors={[
            colours().primaryGradient1,
            colours().primaryGradient2,
            colours().primaryGradient3,
          ]}
          style={[StyleSheet.NoteBackColor, {borderColor: colours().primary}]}>
          <View style={StyleSheet.NoteView}>
            <Text
              onChangeText={val => getCurrentDate(val)}
              value={date}
              style={[StyleSheet.DateText, {color: colours().primary}]}>
              {date}
            </Text>

            <TextInput
              value={title}
              selectionColor="brown"
              multiline
              maxLength={25}
              placeholder="Title"
              style={[StyleSheet.NoteTitle, {color: colours().primary}]}
              onChangeText={val => setTitle(val)}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput
                value={description1}
                selectionColor="brown"
                multiline
                placeholder="Write a note....."
                style={StyleSheet.NoteDescription}
                onChangeText={val => setDescription1(val)}
              />
            </ScrollView>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
