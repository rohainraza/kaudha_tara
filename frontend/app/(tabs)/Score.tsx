
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScorePage = () => {
  // Function to render a grid of achievement boxes
  const renderBoxes = () => {
    let boxes = [];
    for (let i = 1; i <= 30; i++) {
      boxes.push(
        <TouchableOpacity key={i} style={styles.box}>
          <Text style={styles.questionMark}>?</Text> {/* Placeholder for achievements */}
        </TouchableOpacity>
      );
    }
    return boxes;
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Achievements</Text>

      {/* Grid Section */}
      <View style={styles.grid}>
        {renderBoxes()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container for the entire screen
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Header text style
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },

  // Grid layout for achievement boxes
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '105%',
  },

  // Style for individual achievement boxes
  box: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 5,
  },

  // Style for the question mark inside the boxes
  questionMark: {
    color: 'gray',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ScorePage;