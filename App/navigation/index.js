import React from 'react';
import { Image, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';

import FavoritesList from '../screens/Favorites';

const CurrentListStack = createStackNavigator(
  {
    CurrentList: {
      screen: CurrentList,
      navigationOptions: {
        headerTitle: 'Shopping List',
      },
    },
    ItemDetails: {
      screen: ItemDetails,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('item', {}).name,
      }),
    },
  },
  {
    initialRouteName: 'CurrentList',
  },
);

const FavoritesListStack = createStackNavigator({
  FavoritesList: {
    screen: FavoritesList,
    navigationOptions: {
      headerTitle: 'Favorites',
    },
  },
});

const Tabs = createBottomTabNavigator(
  {
    CurrentList: {
      screen: CurrentListStack,
      navigationOptions: {
        tabBarLabel: 'Current',
      },
    },
    FavoritesList: {
      screen: FavoritesListStack,
      navigationOptions: {
        tabBarLabel: 'Favorites',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        let image;

        if (routeName === 'CurrentList')
          image = Platform.select({
            ios: require('../assets/icons/ios-list.png'),
            android: require('../assets/icons/md-list.png'),
          });
        else {
          if (focused)
            image = Platform.select({
              ios: require('../assets/icons/ios-star.png'),
              android: require('../assets/icons/md-star.png'),
            });
          else
            image = Platform.select({
              ios: require('../assets/icons/ios-star-outline.png'),
              android: require('../assets/icons/md-star-outline.png'),
            });
        }

        return (
          <Image
            source={image}
            resizeMode="contain"
            style={{ width: 25, tintColor }}
          />
        );
      },
    }),
  },
);

export default createAppContainer(Tabs);
