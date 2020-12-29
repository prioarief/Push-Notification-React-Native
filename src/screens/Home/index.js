import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {colors} from '../../utils';

const Home = ({auth}) => {
  const [Foto, setFoto] = React.useState(auth.data.foto || null);

  React.useEffect(() => {
    setFoto(auth.data.foto)
  }, [auth.data.foto])

  console.log(Foto)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {Foto === null || !Foto ? (
          <Icon name="user-circle" size={100} color={colors.light} />
        ) : (
          <Image
            source={{uri: Foto}}
            style={{
              width: 120,
              height: 120,
              borderColor: colors.light,
              borderWidth: 1,
              borderRadius: 120 / 2,
            }}
          />
        )}

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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Home);

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
