import React from 'react';
import { View, Text } from 'react-native';

const ItemDetails = ({ navigation }) => {
  const itemText = JSON.stringify(navigation.getParam('item'), null, 2);

  return (
    <View>
      <Text>{itemText}</Text>
    </View>
  );
};

export default ItemDetails;
