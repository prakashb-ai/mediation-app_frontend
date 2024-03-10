import { View, Text,StyleSheet,Image,Dimensions, StatusBar, TextInput,TouchableOpacity ,ImageBackground,ScrollView,FlatList} from 'react-native'
import React, { useState,useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';



const {width , height } = Dimensions.get('window')
console.log("width" + width)
console.log(height)

const  Welcomepage= ({navigation}) => {
  return (

    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
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


      <View style={styles.moodContainer}>
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
                <Text style={styles.names}>Stress</Text>
                   
            </View>
              <View style={styles.box2}>
                <Text style={styles.names}>Angry </Text>
               </View>

          
          </View>


          <View style={styles.boxsecond}>
          
          <View style={styles.box3}>
            {/*image1 */}
                <Text style={styles.names}>Depression</Text>
            </View>
            <View style={styles.box4}>
            {/*image1 */}
            <Text style={styles.names}>Relax</Text>

            </View>

          </View>

          
       </View>


      <View style={styles.categoryContainer}>

        <View style={styles.category}>

              <Text style={styles.categorytext}>Category</Text>

        </View>
        <TouchableOpacity
          onPress={()=>navigation.navigate('viewallcatgeory')}
        >

               <Text style={styles.viewallcategory}>View all...</Text>
        </TouchableOpacity>
        
      </View>



  <ScrollView horizontal={true}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  >
      <View style={styles.boxcategory}>
          <View style={styles.box1category}>
               <ImageBackground source={require('../../vedios/night.jpeg')} style={styles.categoryimage} resizeMode='cover' 
               imageStyle={{ borderRadius: 24 }}>
                      <Text style={styles.categorynamestext}>environment</Text>
                </ImageBackground>
      </View>

      <View style={styles.box2category}>
                <ImageBackground source={require('../../vedios/startpage.png')} style={styles.categoryimage} resizeMode='cover'  imageStyle={{ borderRadius: 24 }}>
                  
                       <Text style={styles.categorynamestext}>environment</Text>
                </ImageBackground>
      </View>

      <View style={styles.box3category}>
                <ImageBackground source={require('../../vedios/depression.jpeg')} style={styles.categoryimage} resizeMode='cover'  imageStyle={{ borderRadius: 24 }}>
                       <Text style={styles.categorynamestext}>environment</Text>
                </ImageBackground>
      </View>

      <View style={styles.box4category}>
                <ImageBackground source={require('../../vedios/backview.jpg')} style={styles.categoryimage} resizeMode='cover'  imageStyle={{ borderRadius: 24 }}>
                       <Text style={styles.categorynamestext}>environment</Text>
                </ImageBackground>
      </View>

      
      </View>

         </ScrollView>


     </View>

      </ScrollView>
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
        backgroundColor:'white',
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
          top:width/73,
          
      },
      
      searchbar:{
      },
      moodContainer:{
        margin:height/85
      },
      popular:{
          flexDirection:'row',
          justifyContent:'space-between',
          marginLeft:width/26,
          marginRight:10
      },
      popularheading:{
        fontSize:20,
        fontWeight:'bold'
      },
      viewall:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray'
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
        backgroundColor:'#AA3A38',
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
      },

      categoryContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: -height/3,
        margin: 18
      },
      categorytext:{
        fontSize:20,
        fontWeight:'bold',

      },
      viewallcategory:{
          fontSize:18,
          fontWeight:'bold',
          color:'gray'
      },

    boxcategory:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    box1category:{
        marginRight:width/40

    },
    box2category:{
      marginRight:width/40

   },
   box3category:{
    marginRight:width/40

  },
  box4category:{
    marginRight:width/40

  },
    
  categoryimage:{
      width :width*0.7,
      height:height/5,
      left:width/65,

  },
  categorynamestext:{
        fontSize:30,
        textAlign:'center',
        textAlignVertical:'center',
        alignContent: 'center',
        alignItems: 'center',
        color:'white',
        top:height/15

        
  },
    
     
     


})
export default Welcomepage

{/* in search bar we can add two colors i mean one for search icon and another for search bar */}