import * as React from 'react';
import {View, Text} from 'react-native';
import {Provider, connect} from 'react-redux';
import store from './src/store/store'; //Import the store
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieListScreen from './src/screens/Home';
import MovieDetailsScreen from './src/screens/Details';
// Create our stack navigator
let RootStack = createStackNavigator();

// Render the app container component with the provider around it
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="MovieListScreen"
          headerMode="none">
          <RootStack.Screen
            name="MoviesListScreen"
            component={MovieListScreen}
          />
          <RootStack.Screen
            name="MovieDetailsScreen"
            component={MovieDetailsScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
