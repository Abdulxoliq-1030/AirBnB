//import liraries
import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

import SearchResult from '../../assets/data/search';

// create a component
const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going ? "
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destination */}
      <FlatList
        data={SearchResult}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

//make this component available to the app
export default DestinationSearch;
