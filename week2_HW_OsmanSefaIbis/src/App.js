/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from './components/Button';
import Badge from './components/Badge';
import Input from './components/Input';
import ProductCard from './components/ProductCard';
import ProductInput from './components/ProductInput';
import Products from './components/Products';
import styles from './App.styles';

const ascendingOrder = value => {};
const descendingOrder = value => {};
const timeOrder = value => {};

const App = () => {
  const [data, setData] = useState([]);
  return (
    <SafeAreaView>
      <View style={styles.badge_container}>
        <Badge
          title="Artan Fiyat"
          onPress={() => {
            ascendingOrder();
          }}
        />
        <Badge
          title="Azalan Fiyat"
          onPress={() => {
            descendingOrder();
          }}
        />
        <Badge
          title="Tarih"
          onPress={() => {
            timeOrder();
          }}
        />
      </View>
      <Products />
      <ProductInput />
    </SafeAreaView>
  );
};

export default App;
