import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the speaker icon
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AudioPage = () => {
  const [text, setText] = useState('');

  const handleTextChange = (input: string) => {
    setText(input);
  };

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.header}>AUDIO</Text>

      {/* Glassy Box */}
      <View style={styles.glassyBox}>
        {/* Speaker Icon and Text */}
        <View style={styles.speakerContainer}>
          <MaterialCommunityIcons name="speaker" size={40} color="#000" />
          <Text style={styles.speakerText}>Write the sentence after hearing the audio</Text>
        </View>

        {/* Text Input Box */}
        <TextInput
          style={styles.textInput}
          placeholder="Write what you heard..."
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  glassyBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
    borderRadius: 15,
    padding: 20,
    width: '90%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  speakerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  speakerText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default AudioPage;
