// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
// import MapView, { Marker, UrlTile, Region } from 'react-native-maps';
// import * as Location from 'expo-location';
// import axios from 'axios';

// type UserLocation = {
//   id: string;
//   name: string;
//   latitude: number;
//   longitude: number;
// };

// // Replace this with your actual backend URL reachable from device/simulator
// const API_BASE_URL = 'http://192.168.1.1:5000'; // Replace with your actual backend URL

// const MapsPage = () => {
//   const [region, setRegion] = useState<Region | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [otherUsers, setOtherUsers] = useState<UserLocation[]>([]);

//   useEffect(() => {
//     let locationSubscription: Location.LocationSubscription | null = null;

//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Denied', 'Location permission is required.');
//         setLoading(false);
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       updateRegion(latitude, longitude);

//       // Subscribe to location updates
//       locationSubscription = await Location.watchPositionAsync(
//         {
//           accuracy: Location.Accuracy.High,
//           timeInterval: 3000,
//           distanceInterval: 5,
//         },
//         async (loc) => {
//           const { latitude, longitude } = loc.coords;
//           updateRegion(latitude, longitude);

//           try {
//             await axios.post(`${API_BASE_URL}/api/users/location`, {
//               userId: 'user1', // Replace with real user ID
//               name: 'Alice',   // Replace with real user name
//               latitude,
//               longitude,
//             });
//           } catch (error) {
//             console.log('Failed to send location:', (error as Error).message);
//           }
//         }
//       );

//       // Fetch other users initially
//       await fetchOtherUsers();

//       setLoading(false);
//     })();

//     // Cleanup subscription on unmount
//     return () => {
//       if (locationSubscription) {
//         locationSubscription.remove();
//       }
//     };
//   }, []);

//   const updateRegion = (lat: number, lon: number) => {
//     setRegion({
//       latitude: lat,
//       longitude: lon,
//       latitudeDelta: 0.01,
//       longitudeDelta: 0.01,
//     });
//   };

//   const fetchOtherUsers = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/api/users/location`);
//       setOtherUsers(response.data as UserLocation[]);
//     } catch (error) {
//       console.log('Failed to fetch other users:', (error as Error).message);
//     }
//   };

//   if (loading || !region) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={region}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         zoomEnabled={true}
//         scrollEnabled={true}
//       >
//         <UrlTile
//           urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           maximumZ={19}
//         />

//         <Marker coordinate={region} title="You are here" />

//         {otherUsers.map((user) => (
//           <Marker
//             key={user.id}
//             coordinate={{ latitude: user.latitude, longitude: user.longitude }}
//             title={user.name}
//             pinColor="blue"
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   map: { flex: 1 },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default MapsPage;





// app/tabs/maps.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapsPage() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Fetching your location...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
      showsUserLocation
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="You are here"
        description="Your current location"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
