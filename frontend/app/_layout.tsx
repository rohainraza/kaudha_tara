import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Detect light or dark mode
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // Load custom font
  });

  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  if (!loaded) {
    return null; // Return null until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        {/* Top-right Icon */}
        <View style={styles.topRightIcon}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              source={require('../assets/images/my_logo.png')} // App logo or icon
              style={styles.icon}
            />
          </Pressable>
        </View>

        {/* Main App Screens */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> {/* Tab navigation */}
          <Stack.Screen name="+not-found" /> {/* Fallback screen */}
        </Stack>

        {/* Modal Notice Box */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)} // Close modal on request
        >
          <BlurView intensity={80} tint="light" style={styles.blurContainer}>
            <View style={styles.modalContent}>
              {/* Modal Content */}
              <Text style={styles.noticeText}>
                Welcome to KaudhaTara – Your Native Language Learning Companion!
                KaudhaTara is a fun and interactive mobile app designed to help you learn and preserve the Chakma language through engaging activities like alphabet lessons, audio practice, quizzes, daily challenges, and more. Whether you're a beginner or looking to improve, this app offers a child-friendly interface, gamified learning, and real-time progress tracking to make language learning enjoyable and effective.

                🧠 Learn. 🎯 Practice. 🏆 Achieve.
              </Text>

              {/* Close Button */}
              <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
            </View>
          </BlurView>
        </Modal>

        {/* Status Bar */}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  // Main container for the layout
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },

  // Top-right icon container
  topRightIcon: {
    position: 'absolute',
    top: 50, // Adjust for iPhone notch
    right: 20,
    zIndex: 999,
  },

  // Icon style
  icon: {
    width: 28,
    height: 28,
  },

  // Blur container for the modal
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal content container
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
  },

  // Text inside the modal
  noticeText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },

  // Close button style
  closeButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },

  // Close button text style
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});