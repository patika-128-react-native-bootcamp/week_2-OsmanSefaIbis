import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import styles from './ProductInput.styles';

const ProductInput = ({add}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <View>
      <Text>Ürün</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Ürün gir"
      />
      <Text>Fiyat</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Fiyat gir"
      />
      <Button
        title="EKLE"
        onPress={() => {
          add({name, number});
        }}
      />
    </View>
  );
};

export default ProductInput;
