import React, {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../@core/redux/reduxUtils';
import {getProducts} from './ducks/ProductSelection';
import {fetchData} from './ducks/ProductThunk';
import ProductsView from './ProductScreen';

const ProductContainer = () => {
  const products = useAppSelector(state => getProducts(state!));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log('render', products.length);

  return <ProductsView status="loading" products={products} />;
};
export default ProductContainer;
