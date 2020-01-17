import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';

const CurrentList = () => {
  const onFavoritePress = () => alert('Ahoy sailor o/');

  const renderNachos = () =>
    nachos.map(({id, name}, index) => (
      <React.Fragment key={id}>
        <ListItem
          name={name}
          onFavoritePress={onFavoritePress}
          isFavorite={index % 2 === 0}
        />
        <Separator />
      </React.Fragment>
    ));

  return (
    <SafeAreaView>
      <ScrollView>{renderNachos()}</ScrollView>
    </SafeAreaView>
  );
};

export default CurrentList;
