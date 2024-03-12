import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileNetworkIndication from './ProfileNetworkIndication';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }
console.log("width: " + width)
console.log("height: " + height)

const ProfilePage = ({ navigation }) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={styles.backicon}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Welcomepage')}
                    >
                        <Icon name='arrow-left' size={30} color="black" />
                    </TouchableOpacity>
                </View>


                <View style={styles.profileContainter}>

                    <View style={[styles.profileImageCircle, { backgroundColor: 'pink' }]}>
                        <Image
                            source={require('../../vedios/night.jpeg')}
                            style={styles.profileImage}
                            resizeMode='cover'
                        />

                    </View>
                </View>



                <View style={styles.addNetworkStatus}>
                    <ProfileNetworkIndication />
                </View>
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.profilename}>
                    prakash
                </Text>

            </View>

            <View style={styles.bio}>
                <Text style={styles.biofont}>
                    I am full stack developer

                </Text>
            </View>

            <View style={styles.editContainer}>
                
                <View style={styles.editOutside}>
                    
                    <Text style={styles.editName}>Edit
                    <Icon name='edit' size={15} style={styles.editIcon}/>
                    </Text>
                    
                </View>
                

            </View>


            <View style={styles.profileFeatures}>
                    <View style={styles.wheather}>
                    <ImageBackground
                                source={require('../../images/wheather_background.jpg')}
                                style={{
                                    width:width/2.1,
                                    height: height / 8,
                                    borderRadius:35,
                                    overflow:'hidden',
                                    resizeMode:'cover'

                                }}
                            >
                        <Text style={styles.profileFeaturesName}>
                            

                        </Text>
                        </ImageBackground>

                    </View>


                    <View style={styles.daystreak}>
                    <ImageBackground
                                source={require('../../images/fire.png')}
                                style={{
                                    width:width/2.1,
                                    height: height / 8,
                                    borderRadius:35,
                                    overflow:'hidden',
                                    resizeMode:'cover'

                                }}
                            >
                    <Text style={styles.profileFeaturesName}></Text>
                    </ImageBackground>


                    </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 3.7
    },
    backicon: {
        flexDirection: 'row',
        marginVertical: height / 14,
        margin: height / 100,

    },

    profileImageCircle: {
        width: Math.min(width, height) / 2.8,
        height: Math.min(width, height) / 2.8,
        borderRadius: Math.min(width, height) / 2.8,
        overflow: 'hidden',
        alignSelf: 'center',
        bottom: height / 12,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 6,
        borderWidth: 1

    },
    profileImage: {
        width: '100%',
        height: '100%',

    },
    addNetworkStatus: {
        bottom: height / 9,
        left: width / 7.5,
        position: 'fixed'


    },
    profilename: {
        fontSize: 35,
        fontWeight: '400',

    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },

    bio: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: height / 65,
        margin: height / 40
    },
    biofont: {
        justifyContent: 'center',

    },
    editContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: height / 65

    },
    editOutside: {
        backgroundColor: '#FFFF5C',
        width: Math.min(width, height) / 1.3,
        height: Math.min(width, height) / 8,
        borderRadius: Math.min(width, height) / 15,
        elevation:3,
        alignItems: 'center', 
    },
    editName: {
        textAlign: 'center',
        padding:Math.min(width, height) / 75,
        fontSize: 23,
        justifyContent:'center'
        
    },
    settingName:{
        fontSize:28,
        fontWeight:'bold'
    },
    profileFeatures:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:height/60,
            
            
    },
    wheather:{
        width: width / 2.1,
        height: height / 8,
        margin: width / 100,
        borderRadius: 24,
        marginRight: width/80,

    },
    daystreak:{
        width: width / 2.1,
        height: height / 8,
        margin: width / 100,
        borderRadius: 24,
    },
    profileFeaturesName:{
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding: Math.min(width,height)/12,
        fontSize:22
        
    }


})

export default ProfilePage
