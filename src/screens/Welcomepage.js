import { View, Text,StyleSheet,Image,Dimensions, StatusBar, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width , height } = Dimensions.get('window')
const  Welcomepage= () => {
  return (
    
    <View style={styles.container}>
      <View>
          {/* image */}
          <Image
            source={require('../../vedios/backview.jpg')}
            style={styles.headingimage}
            
          />

      </View>

      <View style={styles.searchinline}>

            <View style={styles.searchs}>
                <Icon name='search' size={28} color="black"/>

            </View>

            <View style={styles.searchbar}>
              <TextInput
                style={styles.input}
                placeholder="search...."
              />
            </View>
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
      container:{
        flex:1,
      },
      headingimage:{
          flexDirection:'row',
          width: width%1000,
          height:height/3,
          borderBottomLeftRadius:15,
          borderBottomRightRadius:15,
          position:'absolute',
          
      },
      searchinline:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: height/2.81,
        margin:11,
        backgroundColor:'#E8008B',
        borderRadius:16,

      },
      input:{
          width:width/1.2,
          height:height/20,
          fontSize:20,
          paddingLeft:10
        },
      searchs:{
          left:width/28,
          width:width/10,
          top:width/73

      },
      
      searchbar:{
      }

})
export default Welcomepage

{/* in search bar we can add two colors i mean one for search icon and another for search bar */}