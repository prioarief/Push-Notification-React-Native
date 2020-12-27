import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import {User} from '../../../assets';

const Maps = ({auth}) => {
  return (
    <View>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: auth.data.latitude,
          longitude: auth.data.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude:  auth.data.latitude,
            longitude: auth.data.longitude
          }}
          title="Marker"
          pinColor="red"
        />
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Maps);

const styles = StyleSheet.create({
  map: {width: Dimensions.get('window').width, height: 900},
});
