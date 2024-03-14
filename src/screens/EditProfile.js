import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, Pressable, KeyboardAvoidingView,Platform, TouchableOpacity, Button, ScrollView, Image, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 };

const EditProfile = ({ navigation }) => {

    const IMAGES_DATA = [
        { id: 1, source: require('../../vedios/image1.jpg') },
        { id: 2, source: require('../../vedios/image2.jpg') },
        { id: 3, source: require('../../vedios/image3.jpg') },
        { id: 4, source: require('../../vedios/image4.jpg') },
        { id: 5, source: require('../../vedios/image5.jpg') },
        { id: 6, source: require('../../vedios/image6.jpg') }
    ];

    const [selectedImage, setSelectedImage] = useState(null);



    const PostData = async () => {
        try {
            const responseData = await fetch('http://localhost:8000/api/post/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: "name"
                })
            })
            const response = await responseData.json()
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        PostData()
    }, [])

    const handleImagePress = (imageId) => {
        const image = IMAGES_DATA.find(img => img.id === imageId);
        setSelectedImage(image);
    };


    return (
        <>

            <View style={styles.container}>

                <View style={styles.backicon}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfilePage')}
                    >
                        <Icon name='arrow-left' size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.selectContainer}>
                <View style={styles.selectCircle}>

                    {selectedImage ? (
                        <Image source={selectedImage.source} style={styles.selectedImage} />
                    ) : (
                        <Text style={styles.emptyBox}>Select an image</Text>
                    )}

                </View>

            </View>


            <ScrollView horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <View style={styles.showImagesContainer}>

                    {IMAGES_DATA.map(image => (

                        <View key={image.id} style={[styles.showImagesCircle, { marginLeft: width / 45 }]}>
                            <TouchableOpacity key={image.id} onPress={() => handleImagePress(image.id)}>
                                <Image source={image.source} style={styles.thumbnail} />
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            </ScrollView>

           
            <ScrollView
               showsVerticalScrollIndicator={false}
               showsHorizontalScrollIndicator={false}
            >

            <View style={styles.settingContainter}>              

                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>
                            <TextInput
                                placeholder='enter a name'
                                style={styles.input}
                            >

                            </TextInput>
                        </View>

                    </View>

                    <View style={styles.boxSetting}>
                        <View style={styles.languageIcon}>

                            <TextInput
                                placeholder='enter a bio'
                                style={styles.input}
                            >

                            </TextInput>
                        </View>
                    </View>


                
                    <View style={styles.saveContainter}>
                <Text style={styles.savename}>Save</Text>
            </View>
            </View>

            
            </ScrollView>
            


        </>
    );
}
const styles = StyleSheet.create({
    container: {
    },
    backicon: {
        flexDirection: 'row',
        marginVertical: height / 14,
        margin: height / 100,
    },

    selectContainer: {
        marginTop: height % 3,
        height: height / 20

    },
    selectCircle: {
        width: Math.min(width, height) / 2.8,
        height: Math.min(width, height) / 2.8,
        borderRadius: Math.min(width, height) / 2.8,
        overflow: 'hidden',
        alignSelf: 'center',
        bottom: height / 12,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
    },
    emptyBox: {
        textAlign: 'center',

    },
    selectedImage: {
        width: '100%',
        height: '100%'
    },
    showImagesContainer: {
        flexDirection: 'row',
        bottom: height / 25,


    },
    showImagesCircle: {
        width: Math.min(width, height) / 4.5,
        height: Math.min(width, height) / 4.5,
        borderRadius: Math.min(width, height) / 2.8,
        overflow: 'hidden',
        borderWidth: 1,
        marginVertical: height / 10,
        

    },
    thumbnail: {
        width: "100%",
        height: "100%",



    },
    settingContainter: {
        margin:height/50,
        bottom:height/25

    },
    languageIcon: {
        flexDirection: 'row',
        margin: width / 30,
        
    },
  
    
    input:{
        fontSize:20,
    },
    boxSetting: {
        width: width / 1.1,
        height: height / 15,
        backgroundColor: 'white',
        margin: height / 150,
        marginTop:height/50,
        borderRadius: Math.min(width, height) / 5,
        marginRight: width / 4,
        elevation: 0.5,

        
    },
    saveContainter:{
        marginTop:height/10,
        marginLeft:width/5,
        width:width/2,
        height:height/15,
        backgroundColor:'blue',
        borderRadius:24
    },
    savename:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        padding:height/80

    }

});

export default EditProfile;
