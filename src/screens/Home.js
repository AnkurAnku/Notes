import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import GridView from '../components/GridView';
import StyleSheet from '../StyleSheet/StyleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Dialog, {
  DialogContent,
  DialogButton,
  DialogTitle,
} from 'react-native-popup-dialog';
import colours from '../global/colours';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../redux/ThemeSlice';

var timeout;
let List = [];

export default function Home({navigation}) {
  useEffect(() => {
    GetTheme();
  }, []);

  const Theme = useSelector(state => state.Theme);

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [displayList, setdisplayList] = useState([]);
  const [search, setsearch] = useState('');
  const isFocused = useIsFocused();
  const [viewType, setviewType] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    let Notes = await AsyncStorage.getItem('noteList');
    if (Notes == null || Notes == undefined) {
      setData([]);
      setdisplayList([]);
    } else {
      let Update = JSON.parse(Notes);

      List = [...Update];
      setData(List);
      setdisplayList(List);
    }
  };

  const searchFilter = val => {
    setsearch(val);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (val?.length == 0) {
        setdisplayList(data);
      } else {
        const newData = data.filter(item => {
          return item?.title?.toUpperCase().indexOf(val.toUpperCase()) > -1;
        });
        setdisplayList(newData);
      }
    }, 0);
  };

  const removeData = index => {
    const array = [...displayList];
    array.splice(index, 1);
    AsyncStorage.setItem('noteList', JSON.stringify(array));
    setdisplayList(array);
  };
  const GetTheme = async () => {
    let colour = await AsyncStorage.getItem('theme');
    dispatch(changeTheme(colour));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colours().secodary}}>
      <View style={StyleSheet.container}>
        <View style={StyleSheet.Topbar}>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => {
              setShow(true);
            }}>
            <Image
              style={[StyleSheet.ThemeIcon, {tintColor: colours().primary}]}
              source={require('../assets/theme.png')}
            />
          </TouchableOpacity>
          <View></View>
          <Text style={[StyleSheet.Heading, {color: colours().primary}]}>
            Notes
          </Text>

          <View style={StyleSheet.TopRight}>
            <TouchableOpacity
              style={{paddingHorizontal: 15}}
              onPress={() => setviewType(true)}>
              <Image
                style={[StyleSheet.GridIcon, {tintColor: colours().primary}]}
                source={require('../assets/grid.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setviewType(false)}>
              <Image
                style={[
                  StyleSheet.GridListIcon,
                  {tintColor: colours().primary},
                ]}
                source={require('../assets/task.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[StyleSheet.SearchView, {borderColor: colours().primary}]}>
          <Image
            style={[StyleSheet.SearchImg, {tintColor: colours().primary}]}
            source={require('../assets/search1.png')}
          />
          <TextInput
            style={StyleSheet.searchText}
            placeholder="Search notes"
            placeholderTextColor={colours().primary}
            selectionColor={colours().primary}
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        </View>
      </View>

      {displayList.length == 0 ? (
        <View style={StyleSheet.BlankView}>
          <Image
            style={StyleSheet.Noteimg}
            source={require('../assets/notes.png')}
          />
          <Text style={StyleSheet.Textnotes}>No notes here yet</Text>
        </View>
      ) : (
        <FlatGrid
          maxItemsPerRow={viewType ? 2 : 1}
          style={{marginTop: 5}}
          showsVerticalScrollIndicator={false}
          data={displayList.reverse()}
          renderItem={({item, index}) => (
            <GridView
              tittle={item.title}
              description={item.description}
              date={item.date}
              OnClick={item}
              del={() => removeData(index)}
              index={index}
            />
          )}
        />
      )}

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AddNote', {item: {}, type: 'Add', index: -1})
        }
        style={StyleSheet.plus}>
        <Image
          style={[StyleSheet.Plusimg, {tintColor: colours().primary}]}
          source={require('../assets/plus.png')}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Practice')}>
        <Text>Practice</Text>
      </TouchableOpacity> */}
      <View>
        <Dialog
          visible={show}
          dialogTitle={<DialogTitle title=" Theme Colour" />}>
          <DialogContent>
            <View style={StyleSheet.DialogView}>
              <DialogButton
                text="red"
                onPress={() => {
                  dispatch(changeTheme('LIGHT'));
                  setShow(false);
                  AsyncStorage.setItem('theme', 'LIGHT');
                }}
              />
              <DialogButton
                text="Green"
                onPress={() => {
                  dispatch(changeTheme('DARK'));
                  setShow(false);
                  AsyncStorage.setItem('theme', 'DARK');
                }}
              />
              <DialogButton
                text="Brown"
                onPress={() => {
                  dispatch(changeTheme('BROWN'));
                  setShow(false);
                  AsyncStorage.setItem('theme', 'BROWN');
                }}
              />
            </View>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
}
