import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { urlFormatter, URL_CORS_PREFIX } from '../utils/util';
import Input from './shared/Input';

const Search = (props : any) => {
  const {navigation} = props
  const {
    button,
    container,
    text,
    textWrapper,
    passionText,
    musicText,
    inputControls,
  } = styles;
  const [artist, setArtist] = useState('');
  const [isLoading, setIsLoaded] = useState(false)


  const handleArtistSearch = async () => {
    setIsLoaded(true)
    try {
      const response = await axios.get(
        `${URL_CORS_PREFIX}https://api.deezer.com/artist/${urlFormatter(artist, "-")}`
      )
      console.log(response.data)
      const {data} = response
      data.id ? navigation.navigate('Overview',{
        data
      }) : alert(`Artist named ${artist} not found`)
      
    } catch (error) {
      alert('Something went wromg')
    }
  }
  return (
    <View style={container}>
      <View style={textWrapper}>
        <Text style={[text, passionText]}>You bring the </Text>
        <Text style={[text, passionText, { marginLeft: 10 }]}>Passion.</Text>
        <Text style={[text, musicText]}>We bring the </Text>
        <Text style={[text, musicText]}>music.</Text>
      </View>
      <View style={inputControls}>
        <Input
          props={{
            placeholder: 'Search for your favourite artist',
            value: artist,
            onChangeText: (artist: React.SetStateAction<string>)=>setArtist(artist) 
          }}
        />
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleArtistSearch}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit!</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textWrapper: {
    marginHorizontal: 50,
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
  },
  passionText: {
    color: '#ff0092',
  },
  musicText: {
    color: '#97f8ff',
    marginLeft: 40,
  },
  inputControls: {
      marginHorizontal: 30
  },
  buttonWrapper: {
    height: 100,
  },
  button: {
    height: 50,
    backgroundColor: '#ff0092',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
});
export default Search;
