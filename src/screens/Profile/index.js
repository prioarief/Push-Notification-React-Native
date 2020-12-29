import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {Button, Maps} from '../../components';
import {colors} from '../../utils';
import {UploadFoto as upload} from '../../redux/actions/auth';
import {showNotify, removeNotify} from '../../utils'

const Profile = ({auth, upload}) => {
  const [Foto, setFoto] = React.useState(auth.data.foto || null);

  const uploadFoto = () => {
    const options = {
      noData: true,
    };

    launchCamera(options, (response) => {
      setFoto(response.uri);
      upload(response.uri);
      showNotify('Success', 'Upload Success')
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {Foto ? (
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
        ) : (
          <Icon name="user-circle" size={100} color={colors.light} />
        )}

        <View>
          <Text style={styles.welcome}>{auth.data.name}</Text>
          <Button
            type="primary"
            title="Upload Foto"
            onPress={() => uploadFoto()}
          />
        </View>
      </View>
      <View style={{}}>
        <Maps />
      </View>
    </View>
  );
};

const mapDispatchToProps = {upload};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
    height: Dimensions.get('window').width - 160,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
