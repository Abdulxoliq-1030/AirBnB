//import liraries
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

// create a component
const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [chilrden, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setChildren(Math.max(0, chilrden - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{chilrden}</Text>
          <Pressable
            onPress={() => setChildren(chilrden + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Guests;
