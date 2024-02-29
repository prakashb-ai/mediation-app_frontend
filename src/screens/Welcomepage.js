import { View, Text,StyleSheet,Image,Dimensions, StatusBar, TextInput,TouchableOpacity ,ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width , height } = Dimensions.get('window')
const  Welcomepage= ({navigation}) => {
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
                <Icon name='search' size={25} color="black"/>

            </View>

            <View style={styles.searchbar}>
              <TextInput
                style={styles.input}
                placeholder="search...."
              />
            </View>
      </View>


      <View style={styles.categoryContainer}>
          <View style={styles.popular}>
            <Text style={styles.popularheading}>
              Mood
            </Text>

        <TouchableOpacity
          onPress={()=>navigation.navigate('viewall')}
        >
            <Text style={styles.viewall}>
              View all..
            </Text>
        </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <View style={styles.box1}>
                <Text style={styles.names}>Stress&#x1F62C;</Text>
                   
            </View>
              <View style={styles.box2}>
                <Text style={styles.names}>Angry &#x1F620; </Text>
               </View>

          
          </View>


          <View style={styles.boxsecond}>
          
          <View style={styles.box3}>
            {/*image1 */}
                <Text style={styles.names}>Depression &#x1F61E;</Text>
            </View>
            <View style={styles.box4}>
            {/*image1 */}
            <Text style={styles.names}>Relax&#x1F60C;</Text>

            </View>

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
      },
      categoryContainer:{
        margin:height/85
      },
      popular:{
          flexDirection:'row',
          justifyContent:'space-between',
          marginLeft:width/20,
          marginRight:10
      },
      popularheading:{
        fontSize:20,
        fontWeight:'bold'
      },
      viewall:{
        fontSize:20,
        color:'green',
        fontWeight:'bold'
      },

      box:{
        flexDirection:'row',
        height:height/2,
       
      },
      box1:{
        width:width/2.2,
        height:height/15,
        backgroundColor:'#11728C',
        margin:width/100,
        borderRadius:24

      },
      box2:{
        width:width/2.2,
        height:height/15,
        backgroundColor:'#E01C34',
        margin:width/100,
        borderRadius:24


      },
      boxsecond:{
        flexDirection:'row',
        height:height/2,
        margin: height/9,
        marginLeft:width/250,
        position:'absolute',
        
      },
      box3:{
        width:width/2.2,
        height:height/15,
        backgroundColor:'#27924C',
        margin:width/100,
        borderRadius:24,

      },
      box4:{
        width:width/2.2,
        height:height/15,
        backgroundColor:'#972239',
        margin:width/100,
        borderRadius:24

      },
      names:{
        fontSize:19,
        padding:10,
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        color:'white'
      }


})
export default Welcomepage

{/* in search bar we can add two colors i mean one for search icon and another for search bar */}