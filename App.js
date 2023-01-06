import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Home} from './src/screens';
import {Post} from './src/components';
import feed from './src/assets/data/feed';

const App = () => {
  const post1 = feed[0];
  const post2 = feed[2];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <Home /> */}
        <Post post={post2} />
      </SafeAreaView>
    </>
  );
};

export default App;
