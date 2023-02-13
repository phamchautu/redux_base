import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../@core/redux/reduxUtils';
import {getProducts} from './ducks/ProductSelection';
import styles from './styles';
import {fetchData} from './ducks/ProductThunk';

const Product = () => {
  const products = useAppSelector(state => getProducts(state!));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log('re-render');

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};
export default Product;
