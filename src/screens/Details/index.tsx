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
  MovieListScreen: {};
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieListScreen'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const MovieDetailsScreen = ({navigation}: Props) => (
  <>
    <View>
      <Text style={styles.welcome}>Welcome to MovieDetailsScreen</Text>
      <Text style={styles.instructions}>
        To get started, edit ./src/containers/App/index.tsx
      </Text>
      <Button
        title="Go to Movie ListScreen screen"
        onPress={() => navigation.navigate('MovieListScreen')}
      />
    </View>
  </>
);

export default MovieDetailsScreen;
