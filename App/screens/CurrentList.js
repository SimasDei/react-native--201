import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';

const CurrentList = () => {
  const renderNachos = () =>
    nachos.map(({id, name}) => (
      <React.Fragment key={id}>
        <ListItem name={name} />
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
