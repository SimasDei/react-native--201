import React from 'react';
import {
  SafeAreaView,
  SectionList,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useCurrentList, SectionHeader } from '../util/ListManager';

import ListItem from '../components/ListItem';
import Separator from '../components/UI/Separator';
import AddItem from '../components/AddItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

const CurrentList = ({ navigation }) => {
  const {
    list,
    cart,
    loading,
    onLeftSwipeHandler,
    onSubmitHandler,
    onRightSwipeHandler,
    onFavoriteHandler,
    onPressHandler,
  } = useCurrentList();

  const sections = [
    { title: 'List', data: list },
    { title: 'Cart', data: cart },
  ];

  const renderNachos = () => (
    <SectionList
      sections={sections}
      renderSectionHeader={({ section }) => (
        <SectionHeader title={section.title} />
      )}
      renderItem={({ item, item: { name, id }, index }) => (
        <ListItem
          name={name}
          onFavoritePress={onFavoriteHandler}
          isFavorite={index % 2 === 0}
          onLeftSwipeHandler={() => onLeftSwipeHandler(item)}
          onRightSwipeHandler={() => onRightSwipeHandler(id)}
          onPressHandler={() => onPressHandler(navigation, item)}
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
