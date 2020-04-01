import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import PosterCard from './PosterCard';

const PosterContainer = (props) => {
  console.log(props);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PosterCard
          data={props.data.movie.data.Search}
          renderItem={props.renderItem}
          navigation={props.navigation}
          TitleHeader={'Movies on Theater'}
        />
        <PosterCard
          data={props.data.series.data.Search}
          renderItem={props.renderItem}
          navigation={props.navigation}
          TitleHeader={'Comming Soon'}
        />
        <PosterCard
          data={props.data.game.data.Search}
          renderItem={props.renderItem}
          navigation={props.navigation}
          TitleHeader={'Jan 16'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
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
    padding: 10,
  },

  inner: {marginLeft: 2},

  row: {
    height: 390,
    width: 230,
    marginRight: 19,
  },

  imageView: {
    height: 340,
    width: 230,
    marginBottom: 13,
  },

  header: {
    marginTop: 28,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 21,
    color: '#ffffff',
  },

  seeAll: {
    marginTop: 28,
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
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default PosterContainer;
