import React, {useMemo} from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';

import styles from './styles';
import {Product} from './type';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/AntDesign';

export interface ProductsViewProps {
  status: string;
  products: Product[];
}
const ProductsView = (props: ProductsViewProps) => {
  const {products} = props;

  const _renderItem = (product: ListRenderItemInfo<Product>) => {
    const {item} = product;
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{
              uri: item.thumbnail,
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.body}>
          <Text>{item.title}</Text>
          <Text>{`$${item.price}`}</Text>
        </View>
        <View style={styles.footer}>
          <Icon name="closecircle" size={20} color="red" />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
export default ProductsView;
