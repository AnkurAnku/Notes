import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Practice = () => {
  let obj = {
    name: 'Ankur',
    age: '21',
  };
  const [data, setData] = useState('');
  //   AsyncStorage.setItem('Data', 'Abhishek');
  AsyncStorage.setItem('Data2', JSON.stringify(obj));
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let data = await AsyncStorage.getItem('Data2');
    data = JSON.parse(data);
    setData(data.age);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => GetData()}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>{data}</Text>
    </SafeAreaView>
  );
};

export default Practice;
