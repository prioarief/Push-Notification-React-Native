import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
  const IconScreen = () => {
    if (title === 'Home') {
      return active ? (
        <Icon name="home" size={30} color={colors.primary} />
      ) : (
        <Icon name="home" size={30} color={colors.light} />
      );
    }
    if (title === 'Profile') {
      return active ? (
        <Icon name="user" size={30} color={colors.primary} />
      ) : (
        <Icon name="user" size={30} color={colors.light} />
      );
    }

    return <Icon name="home" size={24} color={colors.light} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <IconScreen />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    color: active ? colors.primary : colors.light,
  }),
});
