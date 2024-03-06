import { View, Text,FlatList,StyleSheet,Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import Video  from 'expo-av'

const {width, height} = Dimensions.get('window')

const Reels = () => {

const [videos,setVideo] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])
  

  const fetchdata = async()=>{
    
    const response = await fetch('http://localhost:8000/api/get/reels',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
      
    })
    const data = await response.json()
    setVideo(data)

  }   
  return (

    <View style={styles.container}>
        <Text>Reels</Text>
    <View style={styles.reelscontainter}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{
            width:300,
            height:500
          }}>
            <Video
              source={{ uri: item.vedio}}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    reelscontainter:{
        width:width/10,
        height:height/3,
        backgroundColor:"lightpink"
    }

})

export default Reels