import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ScorePage = () => {
  const renderBoxes = () => {
    let boxes = [];
    for (let i = 1; i <= 30; i++) {
      boxes.push(
        <TouchableOpacity key={i} style={styles.box}>
          <Text style={styles.questionMark}>?</Text>
        </TouchableOpacity>
      );
    }
    return boxes;
  };

  return (
    <View style={styles.container}>
      {/* Achievements Header */}
      <Text style={styles.header}>Achievements</Text>

      {/* Grid of Achievement Boxes */}
      <View style={styles.grid}>
        {renderBoxes()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row', // Set the boxes in a row
    flexWrap: 'wrap', // Allow wrapping of boxes
    justifyContent: 'center', // Center the items in the grid
    alignItems: 'center', // Vertically align boxes in the center
    width: '105%',
  },
  box: {
    width: 70, // Each box will have a fixed width
    height: 70, // Each box will have a fixed height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 5, // Margin between boxes
  },
  questionMark: {
    color: 'gray', // Question mark color
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ScorePage;
