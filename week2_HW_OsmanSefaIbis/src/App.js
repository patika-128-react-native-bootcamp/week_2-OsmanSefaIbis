/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Badge from './components/Badge';
import ProductInput from './components/ProductInput';
import Products from './components/Products';
import styles from './App.styles';

const App = () => {
  const [data, setData] = useState([]);
  const addProduct = ({name, number}) => {
    setData(prev => {
      return [
        ...prev,
        {
          name: name,
          price: number,
          date: new Date(),
        },
      ];
    });
  };
  function ascendingOrder() {
    const newData = [...data];
    const ascending = newData.sort(
      ({price: firstVal}, {price: secondVal}) => firstVal - secondVal,
    );
    setData(ascending);
  }
  function descendingOrder() {
    const newData = [...data];
    const descending = newData.sort(
      ({price: firstVal}, {price: secondVal}) => secondVal - firstVal,
    );
    setData(descending);
  }
  function timeOrder() {
    const newData = [...data];
    const time = newData.sort(
      ({date: firstVal}, {date: secondVal}) => secondVal - firstVal,
    );
    setData(time);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.badge_container}>
        <Badge title="Artan Fiyat" action={ascendingOrder} />
        <Badge title="Azalan Fiyat" action={descendingOrder} />
        <Badge title="Tarih" action={timeOrder} />
      </View>
      <View style={{flex: 6}}>
        <Products data={data} />
      </View>
      <View style={{flex: 2}}>
        <ProductInput add={addProduct} />
      </View>
    </SafeAreaView>
  );
};

export default App;
