//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {DestinationSearch, Guests} from '../screens';
import HomeTabNavigation from './home-tab-navigation';

// create a component
const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Guests"
          component={Guests}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
