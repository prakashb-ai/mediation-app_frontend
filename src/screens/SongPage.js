import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 };

const SongPage = ({ navigation }) => {
  const SONGS_DATA = [
    { id: 1, title: 'Song 1', source: require('../../vedios/song1.mp3') },
    { id: 2, title: 'Song 2', source: require('../../vedios/song2.mp3') },
    { id: 5, title: 'Song 5', source: require('../../vedios/slack.mp3') },

    { id: 3, title: 'Song 3', source: require('../../vedios/song3.mp3') },
    { id: 4, title: 'Song 4', source: require('../../vedios/song4.mp3') },
    { id: 6, title: 'Song 6', source: require('../../vedios/slack.mp3') },

  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // State to track playback progress

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

 // Update the progress calculation in the useEffect hook
 useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded && status.isPlaying) {
          const position = status.positionMillis;
          const duration = status.durationMillis;
          const calculatedProgress = position / duration;
          // Ensure progress is capped at 1 and rounded to 2 decimal places
          setProgress(Math.min(1, parseFloat(calculatedProgress.toFixed(2))));
        } else if (status.isLoaded && !status.isPlaying && status.didJustFinish) {
          // If the song just finished, set progress to 1
          setProgress(1);
          // Automatically play the next song
          const nextIndex = (currentSongIndex + 1) % SONGS_DATA.length;
          setCurrentSongIndex(nextIndex);
          await playSound(SONGS_DATA[nextIndex].source);
        }
      });
    }
  }, [sound, currentSongIndex]);
  
  

  const playSound = async (songUrl) => {
    try {
      const { sound } = await Audio.Sound.createAsync(songUrl);
      setSound(sound);
      setIsPlaying(true); // Update the playback state
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const pauseSound = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setIsPlaying(false); // Update the playback state
      }
    } catch (error) {
      console.error('Error pausing sound:', error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        setIsPlaying(false); // Update the playback state
        setProgress(0); // Reset progress when stopping
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };

  const playPauseToggle = async (songIndex) => {
    if (currentSongIndex === songIndex && isPlaying) {
      await pauseSound();
    } else {
      await stopSound();
      setCurrentSongIndex(songIndex);
      playSound(SONGS_DATA[songIndex].source);
    }
  };

  const playNextSong = async () => {
    const nextIndex = (currentSongIndex + 1) % SONGS_DATA.length;
    await stopSound();
    setCurrentSongIndex(nextIndex);
    playSound(SONGS_DATA[nextIndex].source);
  };

  const playPreviousSong = async () => {
    const previousIndex = (currentSongIndex - 1 + SONGS_DATA.length) % SONGS_DATA.length;
    await stopSound();
    setCurrentSongIndex(previousIndex);
    playSound(SONGS_DATA[previousIndex].source);
  };

  const renderSongItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.songItemContainer}
      onPress={() => playPauseToggle(index)}
    >
      <View style={styles.songItem}>
        <Text style={styles.songTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Icon name={currentSongIndex === index && isPlaying ? 'pause' : 'play'} size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcomepage')}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.headingSongImage}>
        <Image source={require('../../vedios/backview.jpg')} style={styles.headingImage} />
      </View>

      <FlatList
        data={SONGS_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSongItem}
      />

      {/* Progress bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>

      {/* Next and Previous song buttons */}
      <View style={styles.controlButtonsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={playPreviousSong}>
          <Icon name="step-backward" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={playNextSong}>
          <Icon name="step-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backIcon: {
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
  },
  headingSongImage: {
    marginBottom: height * 0.1,
  },
  headingImage: {
    width: width,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  songItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  songItem: {
    paddingVertical: 10,
  },
  songTitle: {
    fontSize: 18,
  },
  playButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  progressBarContainer: {
    height: 4,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#ccc',
  },
    progressBar: {
        height: '100%',
        backgroundColor: 'green',
        position: 'absolute',
        left: 0,
        top: 0,
      
  },
  controlButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  controlButton: {
    marginHorizontal: 10,
  },
});

export default SongPage;
