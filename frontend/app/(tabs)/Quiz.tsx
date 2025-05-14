import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const QuizPage = () => {
  const renderButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 40; i++) {
      buttons.push(
        <Pressable
          key={i}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={() => console.log(`Button ${i} pressed`)}
        >
          <Text style={styles.buttonText}>{i}</Text>
        </Pressable>
      );
    }
    return buttons;
  };

  return (
    <View style={styles.container}>
      {/* Quiz Header */}
      <Text style={styles.header}>Quiz</Text>

      {/* Grid of Quiz Buttons */}
      <View style={styles.grid}>
        {renderButtons()}
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
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
  buttonPressed: {
    backgroundColor: '#007AFF', // Blue when pressed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default QuizPage;
