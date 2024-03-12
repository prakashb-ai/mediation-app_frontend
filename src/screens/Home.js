import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 };

const Home = ({ navigation }) => {
  const [started, setStarted] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [streak,setStreak] =useState([])


  const PostStreak = async()=>{
    try{
        const response = await fetch('http://localhost:8000/api/post/daystreak',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            DayStreak :'DayStreak'
          })
        });
        const responseData = await response.json()
        console.log(responseData)
        setStreak(responseData)
        
       
    }catch(error){
      console.error('Error fetching data:', error);

    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/post/getstarted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          User_id: 'User_id'
        }),
      });
      const data = await response.json();
      console.log(data)
      setStarted(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
     PostStreak();
  },[]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isConnected ? (
        <View>
          <Image
            source={require('../../vedios/startpage.png')}
            style={styles.video}
          />
           <View style={styles.title}>
                <TouchableOpacity
                    onPress={(fetchData,PostStreak)=>
                        navigation.navigate('Welcomepage')}
                        fetchData
                        PostStreak
                    
                    
                >
                     <Text style={styles.text}>
                        Get started
                     </Text>
                </TouchableOpacity>
        </View>
          
        </View>
      ) : (
        
        <Image
          source={require('../../images/image_lost.jpg')}
          style={styles.connectionLostImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  video: {
    width: width * 0.8,
    height: height / 2.5
  },
  connectionLostImage: {
    width: width * 0.8,
    height: height / 2.5
  },
  title:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    top: height/5,
    backgroundColor:'#6ECF78',
    width:width*0.8,
    height: height/16,
    borderRadius: 20,
  },
  text: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:height/75,
  }
});

export default Home;
