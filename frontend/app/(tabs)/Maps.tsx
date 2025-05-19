import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // Map and Marker components
import * as Location from 'expo-location'; // Location services

export default function MapsPage() {
  // State to store the user's current location
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  // State to store error messages (e.g., location permission denied)
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Request location permissions and fetch the user's current location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // Request location permissions
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied'); // Handle permission denial
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({}); // Get current location
      setLocation(currentLocation); // Save location to state
    })();
  }, []);

  // Display an error message if location permissions are denied
  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>{errorMsg}</Text>
      </View>
    );
  }

  // Show a loading indicator while fetching the user's location
  if (!location) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" /> {/* Loading spinner */}
        <Text>Fetching your location...</Text>
      </View>
    );
  }

  // Render the map with the user's current location
  return (
    <MapView
      style={styles.map}
      provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined} // Use Google Maps on Android
      showsUserLocation // Highlight the user's location on the map
      initialRegion={{
        latitude: location.coords.latitude, // User's latitude
        longitude: location.coords.longitude, // User's longitude
        latitudeDelta: 0.01, // Zoom level (vertical)
        longitudeDelta: 0.01, // Zoom level (horizontal)
      }}
    >
      {/* Marker to indicate the user's current location */}
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="You are here" // Marker title
        description="Your current location" // Marker description
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1, // Full-screen map
  },
  centered: {
    flex: 1, // Full-screen container
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});
