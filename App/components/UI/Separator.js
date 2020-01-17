import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default Separator;
