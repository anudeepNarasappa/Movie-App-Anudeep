import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieListScreen from './src/screens/Home';
import MovieDetailsScreen from './src/screens/Details';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MoviesListScreen">
        <Stack.Screen name="MoviesListScreen" component={MovieListScreen} />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
