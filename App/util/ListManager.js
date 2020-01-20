import { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import AsyncStorate from '@react-native-community/async-storage';

const updateStoredCurrentList = list => {
  AsyncStorate.setItem('@@IngredientList/currentList', JSON.stringify(list));
};

export const useCurrentList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const onFavoriteHandler = () => alert('Ahoy sailor o/');

  const onSubmitHandler = ({ nativeEvent: { text } }) => {
    const newIngredient = {
      id: uuid(),
      name: text,
    };
    const newList = [newIngredient, ...list];
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const onLeftSwipeHandler = () => {
    alert('Ahoy Sailor ⛵');
  };

  const onRightSwipeHandler = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const ingredientListInit = async () => {
    try {
      const data = await AsyncStorate.getItem('@@IngredientList/currentList');
      const parsedData = await JSON.parse(data);
      if (parsedData) setList(parsedData);
    } catch (error) {
      console.log(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ingredientListInit();
  }, []);

  return {
    list,
    loading,
    onLeftSwipeHandler,
    onSubmitHandler,
    onRightSwipeHandler,
    onFavoriteHandler,
  };
};
