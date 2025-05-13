import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture and Name */}
      <Image
        source={require('../../assets/images/profile.jpeg')}  // Replace with your profile picture
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>John Doe</Text>

      {/* Normal Box */}
      <View style={styles.glassyBox}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>QUIZ</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>AUDIO</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ALPHABETS</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,  // Adding a border to the profile image for better visibility
    borderColor: '#ddd',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
  glassyBox: {
    width: width * 0.85,
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // More opaque background for visibility
    elevation: 5, // Add shadow for better visibility
  },
  button: {
    width: '90%',
    backgroundColor: '#007AFF', // Solid background color for buttons
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
