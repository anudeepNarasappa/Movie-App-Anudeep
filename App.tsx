import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store'; //Import the store
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import MovieListScreen from './src/screens/Home';
import MovieDetailsScreen from './src/screens/Details';
import SplashScreen from 'react-native-splash-screen';

// Create our stack navigator
let RootStack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="MovieListScreen"
          headerMode="none">
          <RootStack.Screen
            name="MoviesListScreen"
            component={MovieListScreen}
            options={{
              title: 'Custom animation',
              ...MyTransition,
            }}
          />
          <RootStack.Screen
            name="MovieDetailsScreen"
            component={MovieDetailsScreen}
            options={{
              title: 'Custom animation',
              ...MyTransition,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
