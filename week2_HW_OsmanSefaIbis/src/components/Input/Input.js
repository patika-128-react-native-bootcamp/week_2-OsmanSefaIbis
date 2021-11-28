import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.styles';

const Input = ({title}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={title} />
    </View>
  );
};

export default Input;
