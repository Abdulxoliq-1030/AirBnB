//import liraries
import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

// create a component
const Home = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search Button Clicked')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchBtnText}>Where are you going</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Button Clicked')}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

//make this component available to the app
export default Home;
