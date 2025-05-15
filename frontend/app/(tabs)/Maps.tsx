import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

type UserLocation = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

const MapsPage = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(true);
  const [otherUsers, setOtherUsers] = useState<UserLocation[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return;
      }

      // Get initial location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      updateRegion(latitude, longitude);

      // Track real-time location
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000,
          distanceInterval: 5,
        },
        async (loc) => {
          const { latitude, longitude } = loc.coords;
          updateRegion(latitude, longitude);

          // Send to backend
          try {
            await axios.post('http://localhost:5000/api/users/location', {
              userId: 'user1', // Replace with actual user ID from auth
              name: 'Alice',   // Replace with real user name
              latitude,
              longitude,
            });
          } catch (err) {
            const error = err as Error;
            console.log("Failed to send location:", error.message);
          }
        }
      );

      // Fetch other users
      await fetchOtherUsers();
      setLoading(false);
    })();
  }, []);

  const updateRegion = (lat: number, lon: number) => {
    setRegion({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const fetchOtherUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/location');
      setOtherUsers(response.data);
    } catch (err) {
      const error = err as Error;
      console.log('Failed to fetch other users:', error.message);
    }
  };

  if (loading || !region) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        scrollEnabled={true}
      >
        <UrlTile
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />

        {/* Current user marker */}
        <Marker coordinate={region} title="You are here" />

        {/* Other users */}
        {otherUsers.map((user) => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            title={user.name}
            pinColor="blue"
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapsPage;