import { View, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileNetworkIndication from './ProfileNetworkIndication';


const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }
console.log("width: " + width)
console.log("height: " + height)

const ProfilePage = ({ navigation,route }) => {
    const { profileName } = route?.params ?? { profileName: '' };
    const { Bio } = route?.params ?? { Bio: '' };
    const { profileImage } = route?.params ?? { profileImage: '' };



    const [streak, setStreak] = useState([])
    const [createdStreak,updateStreak] = useState([])
    const [isConnected,setIsConnected] = useState(null)


    const createdData  =async ()=>{
        try {
            const response =  await fetch('http://localhost:8000/api/get/daystreak', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const responseData = await  response.json()
            console.log(responseData)

            updateStreak(responseData.data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
        
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/get/allday/daystreak', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const responseData = await response.json()
            console.log(responseData)

            setStreak(responseData.data.slice(0,1));
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    }

    useEffect(() => {
        async function fetchDataAndCreatedData() {
          try {
            await createdData();
            await fetchData();
          } catch (error) {
            console.error('Error fetching or creating data:', error);
          }
        }
      
        fetchDataAndCreatedData();
      }, []);
      

    return (

        <>


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
                              <Image source={profileImage} style={styles.profileImage} />


                    </View>
                </View>



                <View style={styles.addNetworkStatus}>
                    <ProfileNetworkIndication />
                </View>
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.profilename}>
                    {profileName}prakash
                </Text>

            </View>

            <View style={styles.bio}>
                <Text style={styles.biofont}>
                    {Bio} full stack developer

                </Text>
            </View>

            <View style={styles.editContainer}>

                <View style={styles.editOutside}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('EditPage')}
        >
                    <Text style={styles.editName}>Edit
                        <Icon name='edit' size={15} style={styles.editIcon} />
                    </Text>
                    </TouchableOpacity>
                </View>


            </View>


            <View style={styles.profileFeatures}>
                <View style={styles.wheather}>
                    <ImageBackground
                        source={require('../../images/wheather_background.jpg')}
                        style={{
                            width: width / 2.1,
                            height: height / 8,
                            borderRadius: 35,
                            overflow: 'hidden',
                            resizeMode: 'cover',

                        }}
                    >
                        <Text style={styles.profileFeaturesName}>
                            50🔥

                        </Text>
                    </ImageBackground>

                </View>


                <View style={styles.daystreak}>
                    <ImageBackground
                        source={require('../../images/fire.png')}
                        style={{
                            width: width / 2.1,
                            height: height / 8,
                            borderRadius: 35,
                            overflow: 'hidden',
                            resizeMode: 'cover'

                        }}
                    >
                        <FlatList
                            data={streak}
                            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                            renderItem={({ item }) => (
                                <Text style={styles.profileFeaturesName}>
                                    {item.DayStreak}🔥
                                    
                                </Text>
                            )}
                        />
                    </ImageBackground>


                </View>
            </View>


            <View style={styles.settingContainter}>
                <Text style={{
                    fontSize: 30,
                    marginLeft: width / 40,
                    fontWeight: 'bold'
                }}>Settings</Text>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >

                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>
                            <Icon name='language' style={styles.icons} size={26} />
                            <Text style={styles.settingNames}>Languages</Text>
                        </View>

                    </View>

                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>

                            <Icon name='moon-o' style={styles.icons} size={26} />


                            <Text style={styles.settingNames}>Dark Themes</Text>
                        </View>
                    </View>


                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>
                            <Icon name='share-alt' style={styles.icons} size={26} />

                            <Text style={styles.settingNames}>Share</Text>
                        </View>

                    </View>

                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>
                            <Icon name='star' style={styles.icons} size={26} />


                            <Text style={styles.settingNames}>Rating</Text>
                        </View>
                    </View>


                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>
                            <Icon name='pencil' style={styles.icons} size={26} />


                            <Text style={styles.settingNames}>Feedback</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        
              
        </>
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
        borderWidth: 1

    },
    profileImage: {
        width: '100%',
        height: '100%',


    },
    addNetworkStatus: {
        bottom: height / 9,
        left: width / 7.5,

    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: height / 55

    },

    profilename: {
        fontSize: height / 26,
        fontWeight: '500',

    },


    bio: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: height / 120,
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
        elevation: 2,
        alignItems: 'center',
    },
    editName: {
        textAlign: 'center',
        padding: Math.min(width, height) / 75,
        fontSize: 23,
        justifyContent: 'center'

    },
    settingName: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    profileFeatures: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: height / 500,


    },
    wheather: {
        width: width / 2.1,
        height: height / 8,
        margin: width / 100,
        borderRadius: 24,
        marginRight: width / 80,

    },
    daystreak: {
        width: width / 2.1,
        height: height / 8,
        margin: width / 100,
        borderRadius: 24,
    },
    profileFeaturesName: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: Math.min(width, height) / 19,
        fontSize: 45,
        

    },
    settingContainter: {
        flex: 1,
        marginTop: height / 60,

    },
    languageIcon: {
        flexDirection: 'row',
        margin: width / 30

    },
    icons: {
        marginRight: width / 15,
    },
    settingNames: {
        fontSize: height / 43,
        paddingHorizontal: height % 3, // Adjust as needed

    },
    boxSetting: {
        width: width / 1.1,
        height: height / 14,
        backgroundColor: 'white',
        margin: height / 50,
        borderRadius: Math.min(width, height) / 24,
        marginRight: width / 4,
        elevation: 0.5
    }


})

export default ProfilePage
