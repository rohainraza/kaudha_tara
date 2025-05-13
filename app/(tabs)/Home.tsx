import { Link } from 'expo-router'; // Import the Link component
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.headingText}>Welcome to Kaudha Tara</Text>

      {/* Profile Picture and Name */}
      <Image
        source={require('../../assets/images/profile.jpeg')}  // Replace with your profile picture
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>John Doe</Text>

      {/* Buttons */}
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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',  // Dark color for the heading
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  link: {
    width: '90%',
    backgroundColor: '#007AFF',  // Solid background color for buttons
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',  // Ensures the text is centered within the button
  },
});
