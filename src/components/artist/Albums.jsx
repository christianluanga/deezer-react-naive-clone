import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { artist_albums, URL_CORS_PREFIX } from '../../utils/util';

const Albums = ({ id }) => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoaded] = useState(false);
  const MAX_ALBUM = 6;

  const fetch_albums = useCallback(async () => {
    try {
      const response = await axios.get(
        `${URL_CORS_PREFIX}${artist_albums(id, MAX_ALBUM)}`
      );
      setAlbums(response.data);
    } catch (error) {
        alert('Something went wrong')
    }
  }, []);
  useEffect(() => {
    fetch_albums();
  }, []);
//   const renderItem = ({ item, index }) => {
//       const { title_short, duration } = item
//       return(
//         <View style={styles.albums}>
//             <Text style={[styles.text]}>{index + 1}. {title_short}</Text>
//             <Text style={[{},styles.text]}>{(duration / 59).toFixed(1)}</Text>
//         </View>
//       )
//   }
console.log(albums.data)
  return (
    <View style={styles.flatlist}>
        <Text style={styles.header}>Top Albums</Text>
      {/* <FlatList
        data={albums.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      /> */}
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
    albums:{
        
    },
    text:{
        fontSize: 16
    }
})
export default Albums;
