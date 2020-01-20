import { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import AsyncStorate from '@react-native-community/async-storage';

const updateStoredCurrentList = list => {
  AsyncStorate.setItem('@@IngredientList/currentList', JSON.stringify(list));
};
const updateStoredCurrentCart = list => {
  AsyncStorate.setItem('@@IngredientList/currentCart', JSON.stringify(list));
};

export const useCurrentList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

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

  const onLeftSwipeHandler = item => {
    const updateCart = [item, ...cart];
    setCart(updateCart);
    updateStoredCurrentCart(updateCart);
    onRightSwipeHandler(item.id);

    console.log(cart);
  };

  const onRightSwipeHandler = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    updateStoredCurrentList(newList);
  };

  const ingredientListInit = async () => {
    try {
      const listData = await AsyncStorate.getItem(
        '@@IngredientList/currentList',
      );
      const parsedListdData = await JSON.parse(listData);
      setList(parsedListdData || []);

      const cartData = await AsyncStorage.getItem(
        '@@IngredientList/currentCart',
      );
      const parsedCartData = await JSON.parse(cartData);
      setCart(parsedCartData || []);
    } catch (error) {
      console.log(false);
    } finally {
      setLoading(false);
    }
  };

  const onPressHandler = (navigation, item) => {
    navigation.navigate('ItemDetails', { item });
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
    onPressHandler,
  };
};
