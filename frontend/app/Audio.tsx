import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 5;
const keySize = (width - 40 - (numColumns - 1) * 12) / numColumns; // 40 = horizontal padding, 12 = margin between buttons


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

export default function AudioPage() {
  const [inputText, setInputText] = useState('');

  const playRandomAudio = async () => {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    const file = alphabets[randomIndex].maleSoundUrl;

    const { sound } = await Audio.Sound.createAsync(file);
    await sound.playAsync();
  };

  const handleChakmaKeyPress = (char: string) => {
    setInputText((prev) => prev + char);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AUDIO PRACTICE</Text>

      <View style={styles.glassyBox}>
        {/* Play Audio Button */}
        <View style={styles.speakerContainer}>
          <Pressable onPress={playRandomAudio} style={styles.playButton}>
            <MaterialCommunityIcons name="play-circle-outline" size={50} color="#fff" />
          </Pressable>
          <Text style={styles.speakerText}>Tap the button to hear a random alphabet</Text>
        </View>

        {/* Input */}
        <TextInput
          style={styles.textInput}
          placeholder="Type what you heard..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
        />
      </View>

      {/* Chakma Keyboard Grid */}
      <FlatList
  data={alphabets}
  numColumns={numColumns}
  keyExtractor={(item, index) => index.toString()}
  contentContainerStyle={styles.keyboardGrid}
  renderItem={({ item }) => (
    <Pressable
      style={[styles.keyButton, { width: keySize }]}
      onPress={() => handleChakmaKeyPress(item.kaudha)}
    >
      <Text style={styles.keyText}>{item.kaudha}</Text>
    </Pressable>
  )}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  glassyBox: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  speakerContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  playButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  speakerText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  textInput: {
    marginTop: 10,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#333',
  },
  keyboardGrid: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  keyButton: {
    backgroundColor: '#E0E0E0',
    aspectRatio: 1, // Makes it square
    borderRadius: 10,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  keyText: {
    fontSize: 24,
  },
});