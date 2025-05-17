import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ProfilePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture and Name */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/profile.jpeg')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Age: 25</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Gender: Male</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Mother Tongue: Chakma</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.buttonText}>About This App</Text>
        </TouchableOpacity>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Modal for About This App */}
      ...
      {/* Modal for About This App */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalHeading}>📖 About Kaudha Tara</Text>

              <Text style={styles.modalSubHeading}>🌍 Brief History of the Chakma Language</Text>
              <Text style={styles.modalText}>
                The Chakma language, also known as Changma Bhach, is an Indo-Aryan language spoken by the Chakma people, primarily found in the Chittagong Hill Tracts of Bangladesh, and in parts of India (Mizoram, Tripura, Arunachal Pradesh). It has its own unique script derived from the ancient Brahmi script, and is rich in cultural heritage and oral traditions. Despite its deep history, the language is endangered, especially among younger generations, due to lack of formal education and digital learning resources.
              </Text>

              <Text style={styles.modalSubHeading}>📱 What This App Does</Text>
              <Text style={styles.modalText}>
                Kaudha Tara is an educational mobile app designed to help users:
              </Text>
              <Text style={styles.modalText}>🧠 Learn the Chakma Alphabet with visuals and audio</Text>
              <Text style={styles.modalText}>🔊 Practice Pronunciation with male and female voices</Text>
              <Text style={styles.modalText}>🧩 Take Quizzes to test language knowledge</Text>
              <Text style={styles.modalText}>🎯 Play Daily Bonus Quizzes for extra motivation</Text>
              <Text style={styles.modalText}>🗺️ Explore Chakma Culture with a location-based map</Text>
              <Text style={styles.modalText}>🏆 Track Progress through achievements and leaderboards</Text>
              <Text style={styles.modalText}>
                Whether you're a Chakma speaker or a language enthusiast, this app is your gateway to preserving and learning the Chakma language in a fun, interactive way.
              </Text>

              <Text style={styles.modalSubHeading}>💡 Why This App Is Important</Text>
              <Text style={styles.modalText}>
                🌐 Language Preservation: With Chakma being endangered, digital learning tools are essential to keep it alive.
              </Text>
              <Text style={styles.modalText}>
                👦🏽 Youth Engagement: Engaging design and gamified features help younger users learn their native language.
              </Text>
              <Text style={styles.modalText}>
                🧑🏽‍🏫 Accessible Learning: Anyone, anywhere can learn Chakma—no textbooks required.
              </Text>
              <Text style={styles.modalText}>
                🎓 Cultural Awareness: Promotes Chakma identity and cultural pride.
              </Text>

              <Text style={styles.modalSubHeading}>🛠️ App Details</Text>
              <Text style={styles.modalText}>App Name: Kaudha Tara</Text>
              <Text style={styles.modalText}>Version: 1.0.0</Text>
              <Text style={styles.modalText}>Developed With:</Text>
              <Text style={styles.modalText}>- React Native (Expo) – For cross-platform mobile development</Text>
              <Text style={styles.modalText}>- Firebase – For authentication and backend services</Text>
              <Text style={styles.modalText}>- TypeScript – For scalable and type-safe development</Text>
              <Text style={styles.modalText}>- Chakma Script Data – For language content</Text>
              <Text style={styles.modalText}>- Audio Files – For male and female pronunciation guides</Text>

              <Text style={styles.modalSubHeading}>👥 Made by Team Developers</Text>
              <Text style={styles.modalText}>
                Team Kaudha Tara is a passionate group of developers dedicated to preserving indigenous languages through technology.
              </Text>
              <Text style={styles.modalText}>👨‍💻 Rohain Raza Badami </Text>
              <Text style={styles.modalText}>👨‍💻 Devjoy Chakma </Text>
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
...
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  infoSection: {
    alignSelf: 'flex-start',
    marginBottom: 300,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
  },
  editText: {
    fontSize: 18,
    color: '#007AFF',
  },
  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    marginBottom: 12,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: 10,
    padding: 20,
    maxHeight: '70%',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 15,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});