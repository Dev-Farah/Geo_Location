import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CuButton from '../components/CuButton';
import styles from '../styles/global';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';


function LiveLocation() {

  const [currLatitude, setlatitude] = useState();
  const [currLongitude, setlongitude] = useState();

  let getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };

//   useEffect(() => {
//     getLocation();
//   }, []);


  return (

    <View style={[styles.h100]}>

        <View style={[styles.px2, styles.pt2]}>
          <Text style={[styles.fs2, styles.textPrimary]}>Geo Location</Text>
          <CuButton label="Get Location" onPress={getLocation} />
        </View>

        {/* {console.log(currLatitude, currLongitude)} */}
        {currLatitude && currLongitude ? (
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            }}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={StyleSheet.absoluteFillObject}
              region={{
                latitude: currLatitude,
                longitude: currLongitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                title="Me"
                description="This is my Current Location"
                pinColor='blue'
                // image={() => <Image source={require('../assets/shadow.jpg')} style={{height: 35, width:35 }} />}
                coordinate={{
                  latitude: currLatitude,
                  longitude: currLongitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></Marker>
            </MapView>
          </View>
        ) : null}

      </View>
  );
}


export default LiveLocation;