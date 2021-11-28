import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
