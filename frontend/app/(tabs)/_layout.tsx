
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab'; // Custom tab button
import { IconSymbol } from '@/components/ui/IconSymbol'; // Icon component
import TabBarBackground from '@/components/ui/TabBarBackground'; // Tab bar background
import { Colors } from '@/constants/Colors'; // Theme colors
import { useColorScheme } from '@/hooks/useColorScheme'; // Detect light/dark mode

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Get current color scheme

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Active tab color
        headerShown: false, // Hide header
        tabBarButton: HapticTab, // Custom tab button
        tabBarBackground: TabBarBackground, // Custom tab bar background
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' }, // Floating tab bar on iOS
          default: {}, // Default style for other platforms
        }),
      }}
    >
      {/* Score Tab */}
      <Tabs.Screen
        name="Score"
        options={{
          title: 'Score',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="chart.bar.fill" color={color} />
          ),
        }}
      />

      {/* Quiz Tab */}
      <Tabs.Screen
        name="Quiz"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="questionmark.circle.fill" color={color} />
          ),
        }}
      />

      {/* Home Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* Maps Tab */}
      <Tabs.Screen
        name="Maps"
        options={{
          title: 'Maps',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="map.fill" color={color} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}