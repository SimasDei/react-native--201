import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.leftAction}>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Add to Cart
      </Animated.Text>
    </View>
  );
};

export default LeftActions;
