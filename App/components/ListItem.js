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

// import LeftActions from './UI/LeftActions';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
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
  leftAction: {
    flex: 1,
    backgroundColor: '#388e3c',
    justifyContent: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

const LeftActions = () => {
  return (
    <View style={styles.leftAction}>
      <Text style={styles.actionText}>Add to Cart</Text>
    </View>
  );
};

const ListItem = ({name, onFavoritePress, isFavorite}) => {
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
    <Swipeable renderLeftActions={LeftActions}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        {onFavoritePress && (
          <TouchableOpacity onPress={onFavoritePress}>
            <Image source={starIcon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </Swipeable>
  );
};

export default ListItem;
