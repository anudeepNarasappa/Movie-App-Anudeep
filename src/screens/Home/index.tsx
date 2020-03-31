import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const styles = StyleSheet.create({
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

type RootStackParamList = {
  MovieDetailsScreen: {};
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetailsScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const MovieListScreen = ({navigation}: Props) => (
  <>
    <View>
      <Text style={styles.welcome}>Welcome to MovieListScreen</Text>
      <Text style={styles.instructions}>
        To get started, edit ./src/containers/App/index.tsx
      </Text>
      <Button
        title="Go to Movies Description screen"
        onPress={() => navigation.navigate('MovieDetailsScreen')}
      />
    </View>
  </>
);

export default MovieListScreen;
