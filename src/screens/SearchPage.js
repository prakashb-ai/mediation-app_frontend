import { StyleSheet, Text, Image,View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import NetInfo from '@react-native-community/netinfo'


const { width, height } = Dimensions.get('window')


const SearchPage = ({ navigation }) => {

    const [isConnected,setIsConnected] = useState(true)

    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state=>{
            setIsConnected(state.isConnected)
        });

        return ()=>{
            unsubscribe();
        }
    })

    return (
        <View style={styles.containter}>
            {isConnected ?(
            <View style={styles.searchbar}>
                <View styles={styles.backarrow}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Welcomepage')}
                    >
                        <Icon name='arrow-left' size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="search...."
                >

                </TextInput>
                <View style={styles.searchIcon}>
                    <Icon name='search' size={25} color="blue" />

                </View>
                
            </View>
        ):(
                <View style={styles.connectionLostImageContainer}> 
                <Image
                source={require('../../images/image_lost.jpg')}
                style={styles.connectionLostImage}
              />
              </View>
            )}
    
        </View>
        
    )
}


const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    searchbar: {
        marginVertical: height / 11,
        backgroundColor: 'white',
        width: width,
        height: height / 15,
        borderRadius: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width / 14,
        alignItems: 'center',
        elevation: 6,

    },
    input: {
        width: width / 1.2,
        height: height / 15,
        fontSize: 20,
        paddingLeft: 15,
        flex: 1

    },
    searchIcon: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    backarrow: {
        justifyContent: 'center',
        alignContent: 'center'
    },

    connectionLostImageContainer:{
            flex:1,
            justifyContent:'center',
            alignSelf:'center'

    },
    connectionLostImage: {
        width: width * 0.8,
        height: height / 2.5,
       
      },

})


export default SearchPage
