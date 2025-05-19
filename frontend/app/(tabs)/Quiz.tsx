import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { mcqs } from '../mcqs'; // Import your MCQs data

const QuizPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<{ id: number; question: string; options: string[]; correctAnswer: string } | null>(null);
  const [correctAnswerIds, setCorrectAnswerIds] = useState<number[]>([]); // Track all correct answers
  const [feedbackImage, setFeedbackImage] = useState<number | null>(null); // Use `number` for static resources

  const handleButtonPress = (id: number) => {
    const questionData = mcqs.find((q) => q.id === id); // Fetch question by ID
    setCurrentQuestion(questionData || null);
    setIsModalVisible(true);
    setFeedbackImage(null); // Reset feedback image
  };

  const handleOptionPress = (selectedOption: string) => {
    if (currentQuestion) {
      if (selectedOption === currentQuestion.correctAnswer) {
        setFeedbackImage(require('../../assets/images/tick.gif')); // Show tick GIF
        setCorrectAnswerIds((prev) => [...prev, currentQuestion.id]); // Add the question ID to the correct answers list
        setTimeout(() => {
          setFeedbackImage(null); // Hide feedback image after 1 second
          setIsModalVisible(false); // Close the modal
        }, 1000);
      } else {
        setFeedbackImage(require('../../assets/images/wrong.png')); // Show wrong PNG
      }
    }
  };

  const renderButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 40; i++) {
      buttons.push(
        <Pressable
          key={i}
          style={[
            styles.button,
            correctAnswerIds.includes(i) && styles.buttonCorrect, // Change color if answered correctly
          ]}
          onPress={() => handleButtonPress(i)}
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
      <View style={styles.grid}>{renderButtons()}</View>

      {/* Modal for Question */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {currentQuestion && (
              <>
                <Text style={styles.modalHeading}>Question {currentQuestion.id}</Text>
                <Text style={styles.modalQuestion}>{currentQuestion.question}</Text>

                {/* Options */}
                {currentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleOptionPress(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Feedback Image */}
      {feedbackImage && (
        <View style={styles.feedbackContainer}>
          <Image source={feedbackImage} style={styles.feedbackImage} />
        </View>
      )}
    </View>
  );
};

export default QuizPage;

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
  buttonCorrect: {
    backgroundColor: '#007AFF', // Blue for correct answers
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: '70%',
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalQuestion: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
  },
  optionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  feedbackContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackImage: {
    width: 100,
    height: 100,
  },
});