
import React from 'react';
import {AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './components/Routes'
import Footer from './components/Footer'
 
const App = () => (
 <>
  <Routes />
 <Footer/>
  </>
);

const styles = StyleSheet.create({

  //   backgroundVideo: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  //   height:1300,
  //   width:1200
  // }
});

export default App;
