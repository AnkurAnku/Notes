import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  //---HomePage----

  container: {
    zIndex: 1,
  },
  Topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '94%',
    alignSelf: 'center',
  },
  ThemeIcon: {
    height: 25,
    width: 25,
  },
  GridIcon: {
    height: 20,
    width: 20,
  },
  GridListIcon: {
    height: 20,
    width: 20,
  },
  Heading: {fontSize: 30, fontWeight: '700'},
  TopRight: {flexDirection: 'row', alignSelf: 'center'},

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
  },
  SearchImg: {
    height: 20,
    width: 20,
    alignSelf: 'center',
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
  },
  DialogView: {
    height: 140,
    width: 200,
    justifyContent: 'space-evenly',
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
  },
  Textnotes: {
    fontSize: 15,
    marginTop: 5,
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
  toptab: {flexDirection: 'row', justifyContent: 'space-between'},
  BackIcon: {height: 35, width: 15},
  CheckIcon: {height: 30, width: 30},
  NoteBackColor: {
    borderRadius: 20,
    borderWidth: 1,

    height: height * 0.82,
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  NoteView: {
    height: '95%',
    margin: 10,
  },
  DateText: {alignSelf: 'flex-end'},
  NoteTitle: {
    width: '98%',
    fontSize: 25,

    fontWeight: 'bold',
  },
  NoteDescription: {
    width: '98%',
    color: 'white',
    flex: 1,
    fontSize: 25,
    marginTop: 15,
  },

  //--- GridView Component ----

  ComponentView: {
    borderWidth: 1,

    width: 'auto',
    marginHorizontal: Dimensions.get('screen').width * 0.005,
    borderRadius: 10,
    overflow: 'hidden',
    minHeight: 120,
    maxHeight: 120,
  },
  TextDateTime: {
    fontWeight: '600',
    fontSize: 10,
    marginBottom: 8,
    textAlign: 'right',
  },
  TittleText: {
    fontWeight: '800',
    fontSize: 16,
    color: 'white',
  },
  DescriptionText: {
    fontWeight: '600',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },

  DeleteTouch: {
    width: 10,
    height: 20,
    alignSelf: 'flex-end',

    marginBottom: -9,
  },

  DeleteIcon: {
    height: 18,
    width: 18,
    tintColor: 'white',
  },
});
