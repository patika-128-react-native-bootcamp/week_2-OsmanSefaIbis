import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './ProductCard.styles';

const ProductCard = ({title}) => {
  return (
    <View>
      <Text>{title.name}</Text>
    </View>
  );
};

export default ProductCard;
