import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';

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

export default createAppContainer(CurrentListStack);
