import React from 'react';
import {StatusBar} from 'react-native';
import {DestinationSearch, Guests, Home, SearchResult} from './src/screens';
import feed from './src/assets/data/feed';
import 'react-native-gesture-handler';
import Router from './src/navigation/router';

const App = () => {
  const post1 = feed[0];
  const post2 = feed[2];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
