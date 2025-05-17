import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const learnContent = [
        {
          question: 'What is the Chakma language?',
          answer: 'The Chakma language, also known as Changma Bhach, is an Indo-Aryan language spoken by the Chakma people in Bangladesh, India, and Myanmar.',
        },
        {
          question: 'What script does Chakma use?',
          answer: 'The Chakma script, known as Ajhā Pāṭh, is an abugida developed specifically for the Chakma language. It has its own unique characters.',
        },
        {
          question: 'Who are the Chakma people?',
          answer: 'The Chakma people are an indigenous group primarily residing in the Chittagong Hill Tracts of Bangladesh and in parts of India such as Mizoram, Tripura, and Arunachal Pradesh.',
        },
        {
          question: 'How do you greet someone in Chakma?',
          answer: 'You can greet someone in Chakma by saying "Haila", which means "Hello".',
        },
        {
          question: 'How do you say "thank you" in Chakma?',
          answer: 'You can say "Boori" to thank someone in Chakma.',
        },
        {
          question: 'What is the Chakma word for "water"?',
          answer: 'The word for "water" in Chakma is "Doya".',
        },
        {
          question: 'What does "Ama" mean in Chakma?',
          answer: '"Ama" means "Mother" in Chakma.',
        },
        {
          question: 'How do you say "Father" in Chakma?',
          answer: 'You say "Baba" to mean "Father" in Chakma.',
        },
        {
          question: 'What is the word for "language" in Chakma?',
          answer: 'The word for "language" is "Buli".',
        },
        {
          question: 'How do you say "Sit down" in Chakma?',
          answer: 'You say "Zoron" to ask someone to sit down.',
        },
        {
          question: 'What does "Thui" mean in Chakma?',
          answer: '"Thui" means "Eat".',
        },
        {
          question: 'How do you say "I am fine" in Chakma?',
          answer: 'You say "Bhalo asi" to express that you are fine.',
        },
        {
          question: 'What is the Chakma word for "rice"?',
          answer: '"Bhat" is the Chakma word for rice.',
        },
        {
          question: 'What does "Tala" mean in Chakma?',
          answer: '"Tala" means "Earth".',
        },
        {
          question: 'What does "Chanda" mean?',
          answer: '"Chanda" means "Moon".',
        },
        {
          question: 'What does "Zodi" mean?',
          answer: '"Zodi" means "Star" in Chakma.',
        },
        {
          question: 'What does "Soma" mean in Chakma?',
          answer: '"Soma" means "Sun".',
        },
        {
          question: 'How do you say "Rain" in Chakma?',
          answer: 'The Chakma word for rain is "Zima".',
        },
        {
          question: 'What is "Boya"?',
          answer: '"Boya" means "Fire" in Chakma.',
        },
        {
          question: 'What does "Mitro" mean?',
          answer: '"Mitro" means "Friend".',
        },
        {
          question: 'What is the Chakma number for "1"?',
          answer: '"Ek" means "1" in Chakma.',
        },
        {
          question: 'What does "Ajana" mean?',
          answer: '"Ajana" means "Today".',
        },
        {
          question: 'What does "Seyna" mean?',
          answer: '"Seyna" means "Why".',
        },
        {
          question: 'What does "Anu" mean?',
          answer: '"Anu" means "Yes".',
        },
        {
          question: 'What does "Juna" mean?',
          answer: '"Juna" means "Old".',
        },
        {
          question: 'What is the Chakma word for "book"?',
          answer: 'The word for book is "Pura".',
        },
        {
          question: 'What does "Likha" mean?',
          answer: '"Likha" means "Write".',
        },
        {
          question: 'How do you say "School" in Chakma?',
          answer: 'The Chakma word for school is "Thunlai".',
        },
        {
          question: 'How do you say "You" in Chakma?',
          answer: 'You can use "To" to refer to "You" in informal Chakma.',
        },
        {
          question: 'What is the traditional Chakma instrument called?',
          answer: 'One traditional instrument is the "Dul", a type of drum.',
        },
        {
          question: 'Where is Chakma primarily spoken?',
          answer: 'Chakma is primarily spoken in Bangladesh, India, and Myanmar.',
        },
        {
          question: 'What is the meaning of "Bucha"?',
          answer: '"Bucha" means "Understand".',
        },
        {
          question: 'How do you say "Come" in Chakma?',
          answer: 'You can say "Asho" or similar depending on context.',
        },
        {
          question: 'What is the Chakma calendar month "Baisakh"?',
          answer: '"Baisakh" is the first month of the Chakma calendar.',
        },
        {
          question: 'How do you say "Go" in Chakma?',
          answer: 'You can say "Zao" to mean "Go".',
        },
    
    ];
            
      
      const LearnPage = () => {

  return (
    <ScrollView style={styles.container}>
      {learnContent.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
          {index < learnContent.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
};

export default LearnPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 20,
  },
});