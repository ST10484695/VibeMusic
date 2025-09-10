import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useAudioPlayer } from 'expo-audio';





const audiosource = require('./vibeMusic/assets/screenshot-iphone-sound-336170.mp3');

export default function Player() {


  const player = useAudioPlayer(audiosource);
 
  return (
    <View style={styles.container}>
 <Text style={styles.banner}>Vibe</Text>
 
    <View>
    
    <Text style={styles.songName}>Mr Media</Text>
    <Text style={styles.artist}>Tyla</Text>
    </View>
    <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>
      

    <View style={styles.row}>
    
   <TouchableOpacity
        style={styles.buttonSkip}
        onPress={() => 
          player.pause
        }
      ><Text style={styles.buttonText}>skip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStart}
        onPress={() => player.play()}
      ><Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonPause}
        onPress={() => player.pause()}
      ><Text style={styles.buttonText}>Pause</Text>
      </TouchableOpacity>

</View>

 <TouchableOpacity
        style={styles.buttonRepeat}
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
      ><Text style={styles.buttonText}>Repeat</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  }, 
  buttonStart
  : {
    backgroundColor: '#B06DF2',
    width:65,
    height:65,
    borderRadius: 100,
    alignItems: 'center',
    margin: 20,
    justifyContent:'center',
    padding:16,
  },
  buttonText:{
    
    
  },
   buttonSkip: {
    backgroundColor: '#8D92F2',
    width:45,
    height:45,
    borderRadius: 100, 
    alignItems: 'center',
    margin: 30,
    justifyContent:'center',
    padding:16,
  },
   buttonPause: {
    backgroundColor: '#8D92F2',
    width:45,
    height:45,
    borderRadius: 100, 
    alignItems: 'center',
    margin: 30,
    justifyContent:'center',
    padding:16,
  },
  row:{
    flexDirection: 'row', 
  },
  buttonRepeat:{
backgroundColor: '#f194ff',
    width:45,
    height:45,
    borderRadius: 100, 
    alignItems: 'center',
    marginRight:20,
    marginLeft:135,
    justifyContent:'center',
    padding:16,
  },
  banner:{
   color:'#05AFF2',
   flex:1,
   fontSize:25,
   margin:10,
   fontFamily:'georgia'
   

  },
  player:{
    flexDirection: 'row',
     justifyContent: 'space-between',
    
  },
  songName:{
    fontSize:25,
    margin:5,

  },
  artist:{
    fontSize:20,
    margin:5,

  },
  image:{
    width:290,
    height:300,
    margin:15,
  }, })