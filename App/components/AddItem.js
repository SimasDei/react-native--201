import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 14,
    borderRadius: 3,
  },
});

const AddItem = ({onSubmitEditing, style, ...rest}) => {
  const input = useRef(null);

  const onSubmitHandler = event => {
    if (onSubmitEditing) onSubmitEditing(event);
    input.current.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={[styles.input, style]}
        placeholder="Add new item"
        onSubmitEditing={onSubmitHandler}
        {...rest}
      />
    </View>
  );
};

export default AddItem;
