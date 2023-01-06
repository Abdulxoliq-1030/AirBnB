import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Home} from './src/screens';
import {Post} from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <Home /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
