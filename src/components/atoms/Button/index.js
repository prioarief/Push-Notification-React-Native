import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Button = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'primary' ? colors.primary : colors.dark,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    margin: 10,
  }),
  title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: 100,
  },
});
