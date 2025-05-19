import { Link } from 'expo-router'; // Navigation links
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.headingText}>Welcome to Kaudha Tara</Text>

      {/* Profile Picture and Name */}
      <Image
        source={require('../../assets/images/profile.jpeg')} // Profile picture
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>John Doe</Text>

      {/* Navigation Buttons */}
      <Link href="/Learn" style={styles.link}>
        <Text style={styles.buttonText}>LEARN</Text>
      </Link>
      <Link href="/Audio" style={styles.link}>
        <Text style={styles.buttonText}>AUDIO</Text>
      </Link>
      <Link href="/Alphabets" style={styles.link}>
        <Text style={styles.buttonText}>ALPHABETS</Text>
      </Link>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full-screen container
    backgroundColor: 'white', // White background
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    paddingHorizontal: 20, // Horizontal padding
  },
  headingText: {
    fontSize: 24, // Large font size for heading
    fontWeight: '700', // Bold text
    marginBottom: 20, // Space below heading
    color: '#333', // Dark text color
  },
  profileImage: {
    width: 120, // Profile image width
    height: 120, // Profile image height
    borderRadius: 60, // Circular image
    marginBottom: 10, // Space below image
    borderWidth: 2, // Border around the image
    borderColor: '#ddd', // Light gray border color
  },
  nameText: {
    fontSize: 20, // Font size for name
    fontWeight: '600', // Semi-bold text
    marginBottom: 30, // Space below name
    color: '#333', // Dark text color
  },
  link: {
    width: '90%', // Button width relative to screen
    backgroundColor: '#007AFF', // Blue background color
    paddingVertical: 12, // Vertical padding for button
    borderRadius: 15, // Rounded corners
    marginVertical: 10, // Space between buttons
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16, // Font size for button text
    fontWeight: '600', // Semi-bold text
    textAlign: 'center', // Center text within button
  },
});