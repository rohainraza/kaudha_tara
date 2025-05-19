
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* App Logo and Name */}
        <Image
          source={require('../assets/images/my_logo.png')} // App logo
          style={styles.logo}
        />
        <Text style={styles.appName}>Kaudha Tara</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Login Button */}
          <Link href="/(tabs)/Home" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Link>

          {/* Signup Button */}
          <Link href="/signup" asChild>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </Link>

          {/* Continue as Guest */}
          <Link href="/(tabs)/Home" asChild>
            <Text style={styles.guestText}>Continue as Guest</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Safe area for the screen
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Main container for the screen
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Style for the app logo
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  // Style for the app name
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },

  // Container for input fields
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  // Style for input fields
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },

  // Style for the login button
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  // Style for the signup button
  signupButton: {
    width: '100%',
    backgroundColor: '#fff', // White background
    borderWidth: 1, // Blue border
    borderColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  // Text style for the signup button
  signupButtonText: {
    color: '#007AFF', // Blue text
    fontSize: 18,
    textAlign: 'center',
  },

  // Text style for the login button
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  // Style for the "Continue as Guest" text
  guestText: {
    color: '#666',
    fontSize: 16,
    marginTop: 30,
  },
});