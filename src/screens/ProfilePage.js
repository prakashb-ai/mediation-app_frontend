import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
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
                    <ProfileNetworkIndication/>
                </View>
            </View>

                <View style={styles.nameContainer}>
                    <Text style={styles.profilename}>
                        prakash
                    </Text>
                    <View style={styles.editIcon}>
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('EditPage')}
                        >
                        <Icon name='pencil' size={20} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
            

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#E1F8DC',
        width:width,
        height:height/2.9
    },
    backicon: {
        flexDirection: 'row',
        marginVertical: height / 14,
        margin: height / 100,

    },
    
    profileImageCircle: {
        width: Math.min(width, height) / 2.2, 
        height: Math.min(width, height) / 2.2, 
        borderRadius: Math.min(width, height) / 2.2, 
        overflow: 'hidden',
        alignSelf: 'center', 
        bottom: height / 12, 
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation:6,
        borderWidth:1

    },
    profileImage: {
        width: '100%',
        height: '100%',

    },
    addNetworkStatus: {
        bottom: height/8.7,
        left:width/7.5


    },
    profilename: {
        fontSize:29.59,
        left:width/25,
        fontWeight:'400'
    },
    nameContainer:{
           flexDirection:'row',
    },
    editIcon:{
            marginTop: height/60,
            left:width/13
    }
})

export default ProfilePage
