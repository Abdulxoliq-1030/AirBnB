//import liraries
import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../assets/data/feed';
import {Post} from '../../components';
import styles from './styles';

// create a component
const SearchResult = () => {
  return (
    <View style={styles.container}>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

//make this component available to the app
export default SearchResult;
