import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const CardItem = ( {item, index,onPosterClick} ) => {
  const box_size_style = item.Type === 'movie' ? styles.row : styles.min_size;
  const img_style_view =
    item.Type === 'movie' ? styles.imageView : styles.min_img_size;
  const img_uri =
    item.Poster === 'N/A'
      ? 'https://m.media-amazon.com/images/M/MV5BNDFhMDgwNTctNWY4Zi00ZDA2LWJkYzUtZGIzZDVkMjA1MGMyXkEyXkFqcGdeQXVyNDA5ODU0NDg@._V1_SX300.jpg'
      : item.Poster;
  const no_of_lines = item.Type === 'movie' ? 1 : 2;

  return (
    <View style={[box_size_style]}>
      <TouchableOpacity onPress={() => onPosterClick(item.imdbID)}>
        <View>
          <Image source={{uri: img_uri}} style={[img_style_view]} />
          <Text style={styles.title} numberOfLines={no_of_lines}>
            {item.Title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}



const storeData = async (id) => {
  try {
    await AsyncStorage.setItem('IMDB_ID', id);
  } catch (e) {
    // saving error
  }
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#1D1E28',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#1D1E28',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 19,
    padding: 10,
  },

  inner: {marginLeft: 2},

  row: {
    height: 390,
    width: 230,
    marginRight: 19,
  },

  min_size: {
    height: 200,
    width: 105,
    marginRight: 19,
  },
  min_img_size: {
    height: 150,
    width: 105,
    marginRight: 19,
  },
  imageView: {
    height: 340,
    width: 230,
    marginBottom: 13,
  },

  header: {
    marginTop: 58,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 21,
    color: '#ffffff',
  },

  seeAll: {
    marginTop: 58,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 15,
    color: '#9DA3B4',
  },

  title: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 16,
    color: '#FFFFFF',
    marginTop: 9,
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default CardItem;
