import React from 'react';
import {
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useCurrentList } from '../util/ListManager';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';
import AddItem from '../components/AddItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

const CurrentList = () => {
  const {
    list,
    loading,
    onLeftSwipeHandler,
    onSubmitHandler,
    onRightSwipeHandler,
    onFavoriteHandler,
  } = useCurrentList();

  const renderNachos = () => (
    <FlatList
      data={list}
      renderItem={({ item: { name, id }, index }) => (
        <ListItem
          name={name}
          onFavoritePress={onFavoriteHandler}
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
