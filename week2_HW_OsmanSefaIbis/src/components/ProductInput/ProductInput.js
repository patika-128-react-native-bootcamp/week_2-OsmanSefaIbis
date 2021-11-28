import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './ProductInput.styles';
import Input from '../Input';
import Button from '../Button';

const addProduct = () => {};

const ProductInput = () => {
  return (
    <View>
      <Input title="Enter Item" />
      <Input title="Enter Price" />
      <Button
        title="Add"
        onpress={() => {
          addProduct();
        }}
      />
    </View>
  );
};

export default ProductInput;
