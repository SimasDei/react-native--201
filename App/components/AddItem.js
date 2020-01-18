import React, {useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 10,
    borderRadius: 3,
  },
});

const AddItem = ({onSubmitEditing}) => {
  const input = useRef(null);

  const onSubmitHandler = event => {
    if (onSubmitEditing) onSubmitEditing(event);
    input.current.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        placeholder="Add new item"
        onSubmitEditing={onSubmitHandler}
      />
    </View>
  );
};

export default AddItem;
