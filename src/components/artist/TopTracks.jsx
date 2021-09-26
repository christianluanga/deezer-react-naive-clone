import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { artist_top_tracks, URL_CORS_PREFIX } from '../../utils/util';

const TopTracks = ({ id }) => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoaded] = useState(false);
  const TRACKS_LIMIT = 5;

  const fetch_tracks = useCallback(async () => {
    try {
      const response = await axios.get(
        `${URL_CORS_PREFIX}${artist_top_tracks(id, TRACKS_LIMIT)}`
      );
      setTracks(response.data);
    } catch (error) {
        alert('Something went wrong')
    }
  }, []);
  useEffect(() => {
    fetch_tracks();
  }, []);
  const renderItem = ({ item, index }) => {
      const { title_short, duration } = item
      return(
        <View style={styles.details}>
            <Text style={[styles.text]}>{index + 1}. {title_short}</Text>
            <Text style={[{},styles.text]}>{(duration / 59).toFixed(1)}</Text>
        </View>
      )
  }
  return (
    <View style={styles.flatlist}>
        <Text style={styles.header}>Top Tracks</Text>
      <FlatList
        data={tracks.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    flatlist:{
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 10        
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ff0000',
        borderBottomWidth: 1,
        marginVertical: 5,
        paddingBottom: 5
    },
    text:{
        fontSize: 16
    }
})
export default TopTracks;
