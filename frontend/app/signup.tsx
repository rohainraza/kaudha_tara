import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  TextInput,
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const SignupPage = () => {
  const [loading, setLoading] = useState(false);

  // Form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }

    if (!firstName || !lastName || !email || !password || !dateOfBirth) {
      Alert.alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://192.168.1.171:8000/api/signup', {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirmPassword,
        date_of_birth: dateOfBirth,
      });

      Alert.alert('Signup successful!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setDateOfBirth('');
      router.replace('/');
    } catch (err) {
      if (err instanceof Error) {
        console.error('Signup error:', err.message);
      } else {
        console.error('Unexpected error:', err);
      }
      Alert.alert('Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Create Your Account</Text>
        </View>

        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="oneTimeCode"
          autoComplete="off"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textContentType="oneTimeCode"
          autoComplete="off"
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth (YYYY-MM-DD)"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <Text style={{ marginTop: 10 }}>
          Have an account?{' '}
          <Text style={{ color: '#007AFF', textDecorationLine: 'underline' }}>SIGN IN</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});