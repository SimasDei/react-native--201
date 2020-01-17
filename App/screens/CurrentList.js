import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';

const CurrentList = () => {
  const onFavoritePress = () => alert('Ahoy sailor o/');

  const renderNachos = () => (
    <FlatList
      data={nachos}
      renderItem={({item: {name}, index}) => (
        <ListItem
          name={name}
          onFavoritePress={onFavoritePress}
          isFavorite={index % 2 === 0}
        />
      )}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={() => <Separator />}
    />
  );

  return <SafeAreaView>{renderNachos()}</SafeAreaView>;
};

export default CurrentList;
