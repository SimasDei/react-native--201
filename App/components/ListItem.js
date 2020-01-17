import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
  },
});

const ListItem = ({name, onFavoritePress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      {onFavoritePress && (
        <TouchableOpacity onPress={onFavoritePress}>
          <Image
            source={require('../assets/icons/ios-star-outline.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListItem;
