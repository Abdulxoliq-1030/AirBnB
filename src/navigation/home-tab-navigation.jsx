//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

// create a component
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTinColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Message'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default HomeTabNavigation;
