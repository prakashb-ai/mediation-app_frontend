import { View, Text,Image ,Dimensions,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('window') || {width:0, height:0}



const Home = ({navigation}) => {


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
                    onPress={()=>navigation.navigate('Wellcome')}
                    
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
            backgroundColor:'lightgreen',
            width:width*0.8,
            height: height/16,
            borderRadius: 20,
 
        },
        text:{
            fontSize:20,
            fontWeight:'bold',
            marginTop:height/75
                
        }
});

export default Home;