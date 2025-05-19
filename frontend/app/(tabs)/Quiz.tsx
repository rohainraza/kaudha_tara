
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { mcqs } from '../mcqs'; // Import your MCQs data

const QuizPage = () => {
  // State to control the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State to store the current question being displayed in the modal
  const [currentQuestion, setCurrentQuestion] = useState<{
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  } | null>(null);

  // State to track the IDs of questions that have been answered correctly
  const [correctAnswerIds, setCorrectAnswerIds] = useState<number[]>([]);

  // State to store the feedback image (tick or wrong)
  const [feedbackImage, setFeedbackImage] = useState<number | null>(null);

  // Function to handle the button press for a specific question
  const handleButtonPress = (id: number) => {
    const questionData = mcqs.find((q) => q.id === id); // Find the question data by ID
    setCurrentQuestion(questionData || null); // Set the current question
    setIsModalVisible(true); // Show the modal
    setFeedbackImage(null); // Reset the feedback image
  };

  // Function to handle the option press (answer selection)
  const handleOptionPress = (selectedOption: string) => {
    if (currentQuestion) {
      if (selectedOption === currentQuestion.correctAnswer) {
        // If the selected option is correct
        setFeedbackImage(require('../../assets/images/tick.gif')); // Show tick image
        setCorrectAnswerIds((prev) => [...prev, currentQuestion.id]); // Add the question ID to the correct answers list
        setTimeout(() => {
          setFeedbackImage(null); // Hide feedback image after 1 second
          setIsModalVisible(false); // Close the modal
        }, 1000);
      } else {
        // If the selected option is incorrect
        setFeedbackImage(require('../../assets/images/wrong.png')); // Show wrong image
        setTimeout(() => {
          setFeedbackImage(null); // Hide feedback image after 1 second
        }, 1000);
      }
    }
  };

  // Function to render the grid of buttons for each question
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
          onPress={() => handleButtonPress(i)} // Handle button press
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
        onRequestClose={() => setIsModalVisible(false)} // Close modal on request
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {currentQuestion && (
              <>
                {/* Display the current question */}
                <Text style={styles.modalHeading}>Question {currentQuestion.id}</Text>
                <Text style={styles.modalQuestion}>{currentQuestion.question}</Text>

                {/* Render options for the current question */}
                {currentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleOptionPress(option)} // Handle option press
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}

                {/* Feedback Image */}
                {feedbackImage && (
                  <View style={styles.feedbackContainer}>
                    <Image source={feedbackImage} style={styles.feedbackImage} />
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  // Main container for the quiz page
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Header text style
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Grid container for the quiz buttons
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
  },
  // Style for each quiz button
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
  // Style for buttons that have been answered correctly
  buttonCorrect: {
    backgroundColor: '#007AFF', // Blue for correct answers
  },
  // Text style for the button labels
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  // Overlay style for the modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Content container for the modal
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: '70%',
  },
  // Heading style for the modal
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  // Question text style in the modal
  modalQuestion: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 22,
  },
  // Style for each option button
  optionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  // Text style for the option buttons
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  // Container for the feedback image
  feedbackContainer: {
    position: 'absolute', // Use absolute positioning
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -35 }, { translateY: -35 }], // Adjust for the image size (half width and height)
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensure it appears above other elements
  },
  // Style for the feedback image
  feedbackImage: {
    width: 70,
    height: 70,
  },
});