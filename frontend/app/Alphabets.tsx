// import { Audio } from 'expo-av';
// import React, { useState } from 'react';
// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const AlphabetScreen = () => {
//   // State to manage the sound playing
//   const [sound, setSound] = useState<Audio.Sound | null>(null);

//   // Array to hold the alphabet data (you will update this with your actual file names)
//   const alphabetData = [
//     {
//       id: '1',
//       image: require('../assets/alphabet/alphabet_1.png'), // Replace with actual image path
//       sound: require('../assets/alphabet/alphabet_1.mp3'), // Replace with actual sound file path
//     },
//     {
//       id: '2',
//       image: require('../assets/alphabet/alphabet_2.png'), // Replace with actual image path
//       sound: require('../assets/alphabet/alphabet_2.mp3'), // Replace with actual sound file path
//     },
//     // Add more alphabets here...
//   ];

//   // Function to play sound
//   const playSound = async (soundFile: any) => {
//     const { sound } = await Audio.Sound.createAsync(soundFile);
//     setSound(sound);
//     await sound.playAsync();
//   };

//   // Render item for each alphabet
//   const renderItem = ({ item }: { item: any }) => (
//     <View style={styles.alphabetItem}>
//       <Image source={item.image} style={styles.alphabetImage} />
//       <TouchableOpacity onPress={() => playSound(item.sound)}>
//         <Text style={styles.playText}>Play Sound</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Chakma Alphabet</Text>
//       <FlatList
//         data={alphabetData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   alphabetItem: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   alphabetImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   playText: {
//     fontSize: 16,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
// });

// export default AlphabetScreen;
