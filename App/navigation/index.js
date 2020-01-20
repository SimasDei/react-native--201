import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CurrentList from '../screens/CurrentList';

const CurrentListStack = createStackNavigator(
  {
    CurrentList: {
      screen: CurrentList,
    },
    // ItemDetails: {},
  },
  {
    initialRouteName: 'CurrentList',
  },
);

export default createAppContainer(CurrentListStack);
