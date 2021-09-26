import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Albums from './Albums';
import TopTracks from './TopTracks';

const Details = ({
  route: {
    params: { picture_medium, id, name, fans, albums },
  },
}) => {
  return (
    <ScrollView style={styles.container}>
        <View style={[{ backgroundColor: '#c1f1fc' }, styles.image_wrapper]}>
          <Image
            style={styles.image}
            source={{
              uri: picture_medium,
            }}
          />
        </View>
        <View style={[{ backgroundColor: '#00c7f2' }, styles.details_wrapper]}>
            <View>
            <Text style={styles.text}>{fans} Fans</Text>
            <Text style={styles.text}>Total Albums : {albums}</Text>
            </View>
        </View>
        <TopTracks id={id}/>
        <Albums id={id}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2%',
  },
  image_wrapper: {
    height: 200,
    width: '100%',
  },
  details_wrapper:{
    height: 100,
    width: '100%',
    justifyContent: 'center'
  },
  image: {
    marginVertical: 20,
    height: 150,
    width: 150,
    borderRadius: 80,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  }
});
export default Details;
