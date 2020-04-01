import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataSource} from '../../store/epic';
import PosterContainer from '../../components/PosterContainer';
import CardItem from '../../components/CardItem';
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

function MovieListScreen({navigation}: Props) {
  const dispatch = useDispatch();

  //1 - DECLARE VARIABLES
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const dataReducer = useSelector((state) => state.dataReducer);
  const {data} = dataReducer;

  //2 - MAIN CODE BEGINS HERE
  useEffect(() => getData(), []);

  //3 - GET FLATLIST DATA
  const getData = () => {
    setIsFetching(true);
    setTimeout(() => {
      dispatch(fetchDataSource());
      setIsFetching(false);
    }, 1000);
  };

  //4 - RENDER FLATLIST ITEM
  // <CardItem sendPosterId={sendPosterIds} />;

  //5 - RENDER
  if (data.movie === undefined || isFetching) {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </SafeAreaView>
    );
  } else {
    return (
      <PosterContainer
        data={data}
        renderItem={CardItem}
        navigation={navigation}
      />
    );
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MovieListScreen;
