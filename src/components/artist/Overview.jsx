import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Overview = ({route: {params}, navigation})=>{
  const { data : {id, name, picture_medium, nb_album: albums, nb_fan: fans}} = params
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Details', {
            id,
            picture_medium,
            albums,
            fans,
            name,
            id
          })
        }}>
         <Image
         style={styles.image}
        source={{
          uri: picture_medium,
        }}
      />
        </TouchableOpacity>
        <View style={styles.artist_details}>
          <Text style={styles.text}>{fans} Fans</Text>
          <Text style={styles.text}>Total Albums : {albums}</Text>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image:{
      height: 220,
      width: 220,
      borderRadius: 110
    },
    artist_details:{
      paddingTop: 20,
    },
    text: {
      fontSize: 18,
      alignSelf: 'center',
    }
})

export default Overview