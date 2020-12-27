import React from 'react';
import {
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input} from '../../components';
import {Login as LoginAct} from '../../redux/actions/auth';
import {colors} from '../../utils';
import Geolocation from '@react-native-community/geolocation';
import auth from '../../redux/reducers/auth';

const Login = ({navigation, LoginAct, auth}) => {
  const [Name, setName] = React.useState('');
  const [Latitude, setLatitude] = React.useState('');
  const [Longitude, setLongitude] = React.useState('');
  const [Username, setUsername] = React.useState('demo');
  const [Password, setPassword] = React.useState('demo');

  const handleLogin = async () => {
    let data = {
      username: Username,
      password: Password,
      name: Name,
      latitude: Latitude,
      longitude: Longitude,
    };

    LoginAct(data);
    if (Username === 'demo' && Password === 'demo') {
      return navigation.replace('MainApp');
    }

    ToastAndroid.show('Username or password is wrong', ToastAndroid.LONG);
  };

  React.useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });

    // if(auth.data.name){
    //   return navigation.replace('MainApp');
    // }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <Input
        placeholder="Your Name"
        type="text"
        value={Name}
        onChange={(e) => setName(e)}
      />
      <Input
        placeholder="Username"
        type="text"
        value={Username}
        onChange={(e) => setUsername(e)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={Password}
        onChange={(e) => setPassword(e)}
      />
      <Button title="Login" type="primary" onPress={() => handleLogin()} />
    </SafeAreaView>
  );
};
const mapDispatchToProps = {LoginAct};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'Arial',
    color: colors.light,
  },
});
