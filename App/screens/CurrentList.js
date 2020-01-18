import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import uuid from 'uuid/v4';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';
import AddItem from '../components/AddItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

const CurrentList = () => {
  const [list, setList] = useState(nachos);

  const onFavoritePress = () => alert('Ahoy sailor o/');

  const onSubmitHandler = ({nativeEvent: {text}}) => {
    const newIngredient = {
      id: uuid(),
      name: text,
    };
    setList([newIngredient, ...list]);
  };

  const renderNachos = () => (
    <FlatList
      data={list}
      renderItem={({item: {name}, index}) => (
        <ListItem
          name={name}
          onFavoritePress={onFavoritePress}
          isFavorite={index % 2 === 0}
        />
      )}
      keyExtractor={({id}) => id}
      ItemSeparatorComponent={() => <Separator />}
      ListHeaderComponent={() => <AddItem onSubmitEditing={onSubmitHandler} />}
    />
  );

  return (
    <SafeAreaView style={styles.listContainer}>
      <KeyboardAvoidingView style={styles.listContainer} behavior="padding">
        {renderNachos()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CurrentList;
