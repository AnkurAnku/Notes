import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
export default StyleSheet.create({
  //---HomePage----
  maincontainer: {flex: 1, backgroundColor: 'white'},
  container: {
    zIndex: 1,
  },
  topbar: {
    flexDirection: 'row',
    alignSelf: 'center',

    width: width * 0.9,
    justifyContent: 'space-between',
  },
  heading: {fontSize: 30, fontWeight: '700', color: '#9e7542'},
  dot: {
    height: 20,
    width: 25,
    alignSelf: 'center',
    tintColor: '#9e7542',
  },
  SearchView: {
    flexDirection: 'row',
    height: 40,
    width: width * 0.95,
    marginTop: 10,
    borderRadius: 25,
    paddingHorizontal: 10,

    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#9e7542',
  },
  SearchImg: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    tintColor: '#9e7542',
  },
  searchText: {
    alignItems: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
  },
  plus: {
    position: 'absolute',
    zIndex: 2,
    bottom: '6%',
    right: '4%',
  },
  Plusimg: {
    height: 65,
    width: 65,
    alignSelf: 'center',
    tintColor: '#ab7e46',
  },
  //--- BlankHomepage---

  BlankView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Noteimg: {
    height: 50,
    width: 50,
    tintColor: '#ab7e46',
  },
  Textnotes: {
    fontSize: 15,
    marginTop: 5,
    color: '#ab7e46',
  },

  //----SplashScreen---
  splashView: {
    flex: 1,
    height: '100',
    justifyContent: 'center',
  },
  logoimg: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  logoname: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    fontWeight: '600',
  },

  //---AddNotepage----

  SafeView: {
    flex: 1,
    width: '94%',
    alignSelf: 'center',
  },
  topbar: {flexDirection: 'row', justifyContent: 'space-between'},
  BackIcon: {height: 35, width: 15},
  CheckIcon: {height: 30, width: 30},
  NoteBackColor: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9e7542',
    height: '91%',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  NoteView: {
    height: '95%',
    margin: 10,
  },
  DateText: {alignSelf: 'flex-end', color: '#6E2C00'},
  NoteTitle: {
    width: '98%',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  NoteDescription: {
    width: '98%',
    fontSize: 25,
    marginTop: 15,
    color: '#9e7542',
  },

  //--- GridView Component ----

  ComponentView: {
    borderWidth: 1,
    borderColor: '#9e7542',
    width: (Dimensions.get('screen').width * 46) / 100,
    marginHorizontal: (Dimensions.get('screen').width * 0.5) / 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  TextDateTime: {
    color: '#9e7542',
    fontWeight: '600',
    fontSize: 10,
    marginBottom: 8,
    textAlign: 'right',
  },
  TittleText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
  DescriptionText: {
    color: '#9e7542',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 5,
  },
});
