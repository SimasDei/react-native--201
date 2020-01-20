import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftActions from './UI/LeftActions';
import RightActions from './UI/RightActions';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#d3d3d3',
    padding: 10,
  },
  sectionText: {
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    color: '#696969',
  },
  icon: {
    height: 30,
    tintColor: '#696969',
    ...Platform.select({
      ios: {
        tintColor: 'silver',
      },
      android: {
        tintColor: 'lime',
      },
    }),
  },
});

const ListItem = ({
  name,
  onFavoritePress,
  isFavorite,
  onLeftSwipeHandler,
  onRightSwipeHandler,
  onPressHandler,
}) => {
  let starIcon;

  if (isFavorite) {
    starIcon = Platform.select({
      ios: require('../assets/icons/ios-star.png'),
      android: require('../assets/icons/md-star.png'),
    });
  } else {
    starIcon = Platform.select({
      ios: require('../assets/icons/ios-star-outline.png'),
      android: require('../assets/icons/md-star-outline.png'),
    });
  }

  return (
    <Swipeable
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
      onSwipeableLeftOpen={onLeftSwipeHandler}
      onSwipeableRightOpen={onRightSwipeHandler}>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
          {onFavoritePress && (
            <TouchableOpacity onPress={onFavoritePress}>
              <Image
                source={starIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ListItem;
