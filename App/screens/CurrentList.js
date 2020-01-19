import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import uuid from 'uuid/v4';
import AsyncStorate from '@react-native-community/async-storage';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';
import AddItem from '../components/AddItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

const CurrentList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateStoredCurrentList = list => {
    AsyncStorate.setItem('@@IngredientList/currentList', JSON.stringify(list));
  };

  const onFavoritePress = () => alert('Ahoy sailor o/');

  const onSubmitHandler = ({ nativeEvent: { text } }) => {
    const newIngredient = {
      id: uuid(),
      name: text,
    };
    const newList = [newIngredient, ...list];
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const onLeftSwipeHandler = () => {
    alert('Ahoy Sailor ⛵');
  };

  const onRightSwipeHandler = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const ingredientListInit = async () => {
    try {
      const data = await AsyncStorate.getItem('@@IngredientList/currentList');
      const parsedData = await JSON.parse(data);
      if (parsedData) setList(parsedData);
    } catch (error) {
      console.log(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ingredientListInit();
  }, []);

  const renderNachos = () => (
    <FlatList
      data={list}
      renderItem={({ item: { name, id }, index }) => (
        <ListItem
          name={name}
          onFavoritePress={onFavoritePress}
          isFavorite={index % 2 === 0}
          onLeftSwipeHandler={onLeftSwipeHandler}
          onRightSwipeHandler={() => onRightSwipeHandler(id)}
        />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <Separator />}
      ListHeaderComponent={() => <AddItem onSubmitEditing={onSubmitHandler} />}
    />
  );

  if (loading)
    return (
      <SafeAreaView size="large">
        <ActivityIndicator />
      </SafeAreaView>
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
