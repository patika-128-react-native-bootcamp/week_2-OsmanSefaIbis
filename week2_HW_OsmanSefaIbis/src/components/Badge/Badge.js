import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Badge.styles';

const Badge = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
