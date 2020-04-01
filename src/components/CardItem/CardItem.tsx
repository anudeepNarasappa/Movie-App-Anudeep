import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {SAMPLE_IMG} from '../../Utils/constants/constants';
interface CardItemProps {
  item: itemProps;
  index: Number;
  onPosterClick: (id: String) => String;
}
interface itemProps {
  Type: String;
  Poster: String;
  Title: String;
  imdbID: String;
}
const CardItem = (props: CardItemProps) => {
  const {item, onPosterClick} = props;
  const {Type, Poster, Title, imdbID} = item;
  const box_size_style = Type === 'movie' ? styles.row : styles.min_size;
  const img_style_view =
    Type === 'movie' ? styles.imageView : styles.min_img_size;
  const img_uri = Poster === 'N/A' ? SAMPLE_IMG : Poster;
  const no_of_lines = Type === 'movie' ? 1 : 2;

  return (
    <View style={[box_size_style]}>
      <TouchableOpacity onPress={() => onPosterClick(imdbID)}>
        <View>
          <Image source={{uri: img_uri}} style={[img_style_view]} />
          <Text style={styles.title} numberOfLines={no_of_lines}>
            {Title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
