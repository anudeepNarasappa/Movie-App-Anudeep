import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataSource, fetchPosterDetails} from '../../store/epic';
import PosterContainer from '../../components/PosterContainer';
import CardItem from '../../components/CardItem';
import {TouchableHighlight} from 'react-native-gesture-handler';
import MovieListScreen from '../Home';
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

function MovieDetailsScreen({navigation}: Props) {
  const dispatch = useDispatch();

  //1 - DECLARE VARIABLES
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const dataReducer = useSelector((state) => state.dataReducer);
  const {data} = dataReducer;

  //2 - MAIN CODE BEGINS HERE

  const callPrevScreen =() => {
    dispatch(fetchDataSource());
    navigation.navigate('MoviesListScreen');
  }

  if (data.Title !== undefined) {
    return (
      <SafeAreaView style={styles.main_container}>
        <ImageBackground
          source={{uri: data.Poster}}
          style={styles.posterImage}
        />

        <View style={styles.overlay}>
          <TouchableHighlight>
            <Image
              source={require('../../images/icons/play.png')}
              style={styles.playIcon}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.outerOverlay}>
          <View style={styles.inner}>
            <Text style={styles.Title}>{data.Title}</Text>
            <Text style={styles.year}>({data.Year})</Text>
          </View>
          <View style={styles.actionBg}>
            <TouchableOpacity style={styles.actionbtn}>
              <Text style={styles.year}>Action</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionbtn}>
              <Text style={styles.year}>Drama</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionbtn}>
              <Text style={styles.year}>History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingInnerContainer}>
              <Text style={styles.text1}>{data.imdbRating}</Text>
              <Text style={styles.text2}>MetaScore</Text>
              <Text style={styles.text3}>{data.Metascore} Critic reviews</Text>
            </View>
            <View style={styles.ratingInnerContainer}>
              <Image
                style={{height: 18, width: 18}}
                source={require('../../images/icons/star.png')}
              />
              <Text style={styles.text2}>{data.Ratings[0].Value}</Text>
              <Text style={styles.text3}>53 Critic reviews</Text>
            </View>
            <View style={styles.ratingInnerContainer}>
              <Image
                style={{height: 18, width: 18}}
                source={require('../../images/icons/movies.png')}
              />
              <View style={styles.rating}>
                <Text style={styles.text2}>{data.Metascore} </Text>
                <Image
                  style={{height: 11, width: 13, marginLeft: 5}}
                  source={require('../../images/icons/Triangle.png')}
                />
              </View>

              <Text style={styles.text3}>Popularity</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.movieContainer}>
            <Image source={{uri: data.Poster}} style={styles.posterImageNew} />
            <View>
              <View style={[styles.movieContainer, {margin: 0}]}>
                <Text style={styles.newTextStyle}>Title:</Text>
                <Text style={styles.newTitle}>{data.Title}</Text>
              </View>
              <View style={[styles.movieContainer, {margin: 0}]}>
                <Text style={styles.newTextStyle}>Running Time:</Text>
                <Text style={styles.newTitle}>{data.Runtime}</Text>
              </View>
              <View style={[styles.movieContainer, {margin: 0}]}>
                <Text style={styles.newTextStyle}>Release Date:</Text>
                <Text style={styles.newTitle}>{data.Released}</Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.storyline}>Storyline</Text>
            <Text style={styles.story}>{data.Plot}</Text>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.storyline}>Full Cast & Crew</Text>

            <View>
              <View style={styles.crew}>
                <Text style={styles.newTextStyle}>Director:</Text>
                <Text style={styles.crewStyle}>{data.Director}</Text>
              </View>
              <View style={styles.crew}>
                <Text style={styles.newTextStyle}>Writer:</Text>
                <Text style={styles.crewStyle}>{data.Writer}</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.footerView}>
          <View>
            <Text style={styles.buyTicket}>BUY TICKET</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => callPrevScreen()}
          style={styles.back}>
          <Image
            style={styles.backImg}
            source={require('../../images/icons/back.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    left: 10,
    top: 60,
    position: 'absolute',
  },
  backImg:{
    width: 18,
    height: 10,
  },
  buyTicket: {
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
  },
  footerView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: '#F84B62',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  crew: {
    marginLeft: 25,
    marginTop: 20,
  },
  crewStyle: {
    marginTop: 10,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
  },
  storyline: {
    marginLeft: 25,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 21,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  story: {
    marginLeft: 25,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 18,
    color: '#9DA3B4',
    marginTop: 20,
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  ratingInnerContainer: {
    display: 'flex',
    width: 100,
    flexDirection: 'column',
    marginTop: 24,
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#86E996',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 19,
    lineHeight: 20,
  },
  text2: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 15,
    marginTop: 11,
  },
  newTextStyle: {
    color: '#9DA3B4',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 21,
  },
  newTitle: {
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 21,
  },
  text3: {
    color: '#9DA3B4',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 13,
    marginTop: 11,
  },
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  main_container: {
    marginTop: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#1B1C26',
  },
  ratingContainer: {
    marginTop: 33,
    margin: 25,
    borderTopColor: '#484855',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  line: {
    borderTopColor: '#484855',
    borderTopWidth: 1,
    margin: 25,
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#1B1C26',
    width: '100%',
    padding: 25,
    opacity: 0.8,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  actionBg: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#1B1C26',
    width: '100%',
    paddingLeft: 25,
    opacity: 0.8,
  },
  posterImage: {
    width: '100%',
    height: 467,
    opacity: 0.4,
    resizeMode: 'contain',
  },
  posterImageNew: {
    width: 125,
    height: 175,
    marginLeft: 25,
    borderRadius: 5,
    marginRight: 24,
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 467,
  },
  outerOverlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    height: 520,
  },
  playIcon: {
    height: 63,
    width: 63,
  },
  Title: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 29,
    lineHeight: 29,
    color: '#FFFFFF',
  },
  year: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 13,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  actionbtn: {
    opacity: 0.3,
    borderWidth: 0.6,
    borderColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
});

export default MovieDetailsScreen;
