import { View, Text,Image ,Dimensions,StyleSheet, TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react'


const { width, height } = Dimensions.get('window') || {width:0, height:0}



const Home = ({navigation}) => {

        const [started , setStarted] = useState('')
        
        const fetchData = async ()=>{

                const response = await fetch('http://localhost:8000/api/post/getstarted',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        User_id: 'User_id',
                    }),
                });
                const data = await response.json()
                console.log('data:',data)
                setStarted(data)
                
            }
        useEffect(()=>{
            fetchData()
        },[])

        
  return (
    <View style={styles.container}>
        <View>
           <Image
            source={require('../../vedios/startpage.png')}
            style={styles.vedio}
           />
        </View>

        <View style={styles.title}>
                <TouchableOpacity
                    onPress={(fetchData)=>
                        navigation.navigate('Welcomepage')}
                        fetchData
                    
                    
                >
                     <Text style={styles.text}>
                        Get started
                     </Text>
                </TouchableOpacity>
        </View>
    </View>
  )
};


const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        },

        vedio:{
            width:width*0.8,
            height:height/2.5,
            left: width/height
             
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
        text:{
            fontSize:20,
            fontWeight:'bold',
            marginTop:height/75,
                
        }
});

export default Home;