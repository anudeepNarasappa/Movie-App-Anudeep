import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataSource, fetchPosterDetails} from '../../store/epic';
import PosterContainer from '../../components/PosterContainer';
import {CardItem} from '../../components/CardItem';
import {styles} from './style';

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
    }, 500);
  };

  const onCallbackRecieved = (id: String) => {
    dispatch(fetchPosterDetails(id));
    navigation.navigate('MovieDetailsScreen');
  };

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
        onPosterClick={onCallbackRecieved}
      />
    );
  }
}

export default MovieListScreen;
