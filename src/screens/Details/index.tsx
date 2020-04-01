import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataSource} from '../../store/epic';
import {styles} from './style';
import {
  ACTION,
  DRAMA,
  HISTORY,
  METASCORE,
  CRITICS,
  CRITICS_REVIEWS,
  POPULARITY,
  TITLE,
  RUNNING_TIME,
  RELEASE_DATE,
  STORYLINE,
  CAST,
  DIRECTOR,
  WRITER,
  BUY_TICKET,
} from '../../Utils/constants/constants';

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

  //Access Redux Store State
  const dataReducer = useSelector((state) => state.dataReducer);
  const {data} = dataReducer;

  //2 - MAIN CODE BEGINS HERE

  const callPrevScreen = () => {
    dispatch(fetchDataSource());
    navigation.navigate('MoviesListScreen');
  };

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
              <Text style={styles.year}>{ACTION}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionbtn}>
              <Text style={styles.year}>{DRAMA}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionbtn}>
              <Text style={styles.year}>{HISTORY}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingInnerContainer}>
              <Text style={styles.text1}>{data.imdbRating}</Text>
              <Text style={styles.text2}>{METASCORE}</Text>
              <Text style={styles.text3}>{data.Metascore} Critic reviews</Text>
            </View>
            <View style={styles.ratingInnerContainer}>
              <Image
                style={styles.rat_new_style}
                source={require('../../images/icons/star.png')}
              />
              <Text style={styles.text2}>{data.Ratings[0].Value}</Text>
              <Text style={styles.text3}>{CRITICS_REVIEWS}</Text>
            </View>
            <View style={styles.ratingInnerContainer}>
              <Image
                style={styles.rat_new_style}
                source={require('../../images/icons/movies.png')}
              />
              <View style={styles.rating}>
                <Text style={styles.text2}>{data.Metascore} </Text>
                <Image
                  style={styles.img_text_style}
                  source={require('../../images/icons/Triangle.png')}
                />
              </View>

              <Text style={styles.text3}>{POPULARITY}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.movieContainer}>
            <Image source={{uri: data.Poster}} style={styles.posterImageNew} />
            <View>
              <View style={[styles.movieContainer]}>
                <Text style={styles.newTextStyle}>{TITLE}</Text>
                <Text style={styles.newTitle}>{data.Title}</Text>
              </View>
              <View style={[styles.movieContainer]}>
                <Text style={styles.newTextStyle}>{RUNNING_TIME}</Text>
                <Text style={styles.newTitle}>{data.Runtime}</Text>
              </View>
              <View style={[styles.movieContainer]}>
                <Text style={styles.newTextStyle}>{RELEASE_DATE}</Text>
                <Text style={styles.newTitle}>{data.Released}</Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.storyline}>{STORYLINE}</Text>
            <Text style={styles.story}>{data.Plot}</Text>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.storyline}>{CAST}</Text>

            <View>
              <View style={styles.crew}>
                <Text style={styles.newTextStyle}>{DIRECTOR}</Text>
                <Text style={styles.crewStyle}>{data.Director}</Text>
              </View>
              <View style={styles.crew}>
                <Text style={styles.newTextStyle}>{WRITER}</Text>
                <Text style={styles.crewStyle}>{data.Writer}</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.footerView}>
          <View>
            <Text style={styles.buyTicket}>{BUY_TICKET}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => callPrevScreen()} style={styles.back}>
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

export default MovieDetailsScreen;
