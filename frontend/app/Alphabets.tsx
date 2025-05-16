import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

// Full list of Chakma alphabets with audio (add your complete list here)
const alphabets = [
    {
      kaudha: '𑄶',
      maleSoundUrl: require('../assets/audios/male/00_0_sunnyo.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_0_sunnyo.mp3'),
    },
    {
      kaudha: '𑄷',
      maleSoundUrl: require('../assets/audios/male/00_1_ek.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_1_ek.mp3'),
    },
    {
      kaudha: '𑄸',
      maleSoundUrl: require('../assets/audios/male/00_2_dwi.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_2_dwi.mp3'),
    },
    {
      kaudha: '𑄹',
      maleSoundUrl: require('../assets/audios/male/00_3_tin.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_3_tin.mp3'),
    },
    {
      kaudha: '𑄺',
      maleSoundUrl: require('../assets/audios/male/00_4_cheir.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_4_cheir.mp3'),
    },
    {
      kaudha: '𑄻',
      maleSoundUrl: require('../assets/audios/male/00_5_paach.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_5_paach.mp3'),
    },
    {
      kaudha: '𑄼',
      maleSoundUrl: require('../assets/audios/male/00_6_chaw.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_6_chaw.mp3'),
    },
    {
      kaudha: '𑄽',
      maleSoundUrl: require('../assets/audios/male/00_7_saat.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_7_saat.mp3'),
    },
    {
      kaudha: '𑄾',
      maleSoundUrl: require('../assets/audios/male/00_8_aittyo.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_8_aittyo.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/00_9_naw.mp3'),
      femaleSoundUrl: require('../assets/audios/female/00_9_naw.mp3'),
    },
    {
      kaudha: '𑄃',
      maleSoundUrl: require('../assets/audios/male/01_01_pich_pujo_aa.mp3'),
      femaleSoundUrl: require('../assets/audios/female/01_01_pich_pujo_aa.mp3'),
    },
    {
      kaudha: '𑄄',
      maleSoundUrl: require('../assets/audios/male/01_02_dheil_bhanga_e.mp3'),
      femaleSoundUrl: require('../assets/audios/female/01_02_dheil_bhanga_e.mp3'),
    },
    {
      kaudha: '𑄅',
      maleSoundUrl: require('../assets/audios/male/01_03_bochchi_u.mp3'),
      femaleSoundUrl: require('../assets/audios/female/01_03_bochchi_u.mp3'),
    },
    {
      kaudha: '𑄆',
      maleSoundUrl: require('../assets/audios/male/01_04_lejubo_e.mp3'),
      femaleSoundUrl: require('../assets/audios/female/01_04_lejubo_e.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/01_05_bajonye_o.mp3'),
      femaleSoundUrl: require('../assets/audios/female/01_05_bajonye_o.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/02_01_chuchengye_kaa.mp3'),
      femaleSoundUrl: require('../assets/audios/female/02_01_chuchengye_kaa.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/02_02_gujongye_khaa.mp3'),
      femaleSoundUrl: require('../assets/audios/female/02_02_gujongye_khaa.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/02_03_chaindye_gaa.mp3'),
      femaleSoundUrl: require('../assets/audios/female/02_03_chaindye_gaa.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/02_04_tindeilye_ghaa.mp3'),
      femaleSoundUrl: require('../assets/audios/female/02_04_tindeilye_ghaa.mp3'),
    },
    {
      kaudha: '𑄿',
      maleSoundUrl: require('../assets/audios/male/02_05_chilemo_ngya.mp3'),
      femaleSoundUrl: require('../assets/audios/female/02_05_chilemo_ngya.mp3'),
    },
  ];

  export default function AlphabetScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const playSound = async (file: any) => {
      const { sound } = await Audio.Sound.createAsync(file);
      await sound.playAsync();
    };
  
    const currentAlphabet = alphabets[currentIndex];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Current Selected Alphabet */}
        <Text style={styles.alphabet}>{currentAlphabet.kaudha}</Text>
  
        {/* Male & Female Audio Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => playSound(currentAlphabet.maleSoundUrl)}>
            <Text style={styles.buttonText}>Male Voice</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => playSound(currentAlphabet.femaleSoundUrl)}>
            <Text style={styles.buttonText}>Female Voice</Text>
          </Pressable>
        </View>
  
        {/* Horizontal scroll inside vertical scroll */}
        <View style={styles.horizontalWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {alphabets.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.alphabetButton,
                  index === currentIndex && styles.activeAlphabetButton,
                ]}
                onPress={() => setCurrentIndex(index)}
              >
                <Text
                  style={[
                    styles.alphabetButtonText,
                    index === currentIndex && styles.activeAlphabetText,
                  ]}
                >
                  {item.kaudha}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 120,
      //backgroundColor: '#FCFCFC',
    },
    alphabet: {
      fontSize: 150,
      marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 20,
      marginBottom: 100,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 18,
      paddingHorizontal: 25,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    horizontalWrapper: {
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
    },
    scrollContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    alphabetButton: {
      backgroundColor: '#E0E0E0',
      borderRadius: 8,
      paddingVertical: 25,
      paddingHorizontal: 20,
      marginHorizontal: 4,
    },
    alphabetButtonText: {
      fontSize: 35,
    },
    activeAlphabetButton: {
      backgroundColor: '#007AFF',
    },
    activeAlphabetText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });


