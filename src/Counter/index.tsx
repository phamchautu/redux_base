import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../@core/redux/reduxUtils';
import {increment, decrement} from './ducks/CounterSlice';
import {getCount} from './ducks/CounterSelection';
import styles from './styles';
import {fetchData} from './ducks/CounterThunk';

const Counter = () => {
  const count = useAppSelector(state => getCount(state!));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={styles.button}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Fetch Data</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;
