import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';

const CurrentList = () => {
  const renderNachos = () =>
    nachos.map(ingredient => (
      <ListItem key={ingredient.id} name={ingredient.name} />
    ));

  return (
    <SafeAreaView>
      <ScrollView>{renderNachos()}</ScrollView>
    </SafeAreaView>
  );
};

export default CurrentList;
