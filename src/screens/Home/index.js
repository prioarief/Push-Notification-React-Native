import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="user-circle" size={100} color={colors.light} />
        {/* <Image source={User} style={{width: 150, height: 150}} /> */}
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.welcome}>Prio Arief Gunawan</Text>
        </View>
      </View>
      <View style={{margin: 15}}>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Text style={styles.date}>{new Date().toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcome: {
    color: colors.light,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  date: {
    color: colors.dark,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {flex: 1, backgroundColor: colors.light},
  header: {
    backgroundColor: colors.dark,
    height: Dimensions.get('window').width - 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
