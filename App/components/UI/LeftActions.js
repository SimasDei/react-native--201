import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = {
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
};

const LeftActions = () => {
  return (
    <View style={styles.leftAction}>
      <Text style={styles.actionText}>Add to Cart</Text>
    </View>
  );
};

export default LeftActions;
