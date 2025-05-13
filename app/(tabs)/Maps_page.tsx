import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapsPage = () => {
  // Default region for the map, you can change the coordinates
  const initialRegion = {
    latitude: 37.78825, // Default latitude (e.g., San Francisco)
    longitude: -122.4324, // Default longitude
    latitudeDelta: 0.0922, // Zoom level
    longitudeDelta: 0.0421, // Zoom level
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true} // Show the user's location (optional)
      >
        {/* Add a marker to the map */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="My Location" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width, // Full screen width
    height: Dimensions.get('window').height, // Full screen height
  },
});

export default MapsPage;
