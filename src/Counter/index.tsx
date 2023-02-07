import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../@core/redux/reduxUtils';
import {increment, decrement, incrementByAmount} from './ducks/CounterSlice';
import {getCount} from './ducks/CounterSelection';
import styles from './styles';

const Counter = () => {
  const count = useAppSelector(state => getCount(state!));
  const dispatch = useAppDispatch();

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
      <TouchableOpacity
        onPress={() => dispatch(incrementByAmount(5))}
        style={styles.button}>
        <Text>+5</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;
