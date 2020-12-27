import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import { colors } from '../../../utils';

const Input = ({placeholder, value, onChange, type}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.light}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    margin: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.light,
    width: Dimensions.get('window').width - 100,
  },
  input: {padding: 10, color: colors.light},
});
