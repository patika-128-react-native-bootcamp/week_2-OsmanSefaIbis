import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './Products.styles';

const ProductCard = ({name, price}) => {
  console.log(name);
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
      <Text>{price} TL</Text>
    </View>
  );
};

const Products = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductCard name={item.name} price={item.price} />
        )}
        keyExtractor={item => item.id}
        extraData={data}
      />
    </View>
  );
};

export default Products;
