import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Badge.styles';

const Badge = ({title, action}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
