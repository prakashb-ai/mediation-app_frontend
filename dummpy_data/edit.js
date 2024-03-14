import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, FlatList, Image, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 };

const EditProfile = ({ navigation }) => {

    const IMAGES_DATA = [
        { id: 1, source: require('../../vedios/backview.jpg') },
        { id: 2, source: require('../../vedios/backview.jpg') },
        { id: 3, source: require('../../vedios/backview.jpg') },
        { id: 4, source: require('../../vedios/backview.jpg') },
        { id: 5, source: require('../../vedios/backview.jpg') },
        { id: 6, source: require('../../vedios/backview.jpg') }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImagePress = (imageId) => {
        const image = IMAGES_DATA.find(img => img.id === imageId);
        setSelectedImage(image);
    };

    return (
        <View style={styles.container}>



            <View style={styles.backicon}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Welcomepage')}
                >
                    <Icon name='arrow-left' size={30} color="black" />
                </TouchableOpacity>
            </View>




            <View style={styles.imageList}>
                <View style={styles.selectedImageContainer}>
                    {selectedImage ? (
                        <Image source={selectedImage.source} style={styles.selectedImage} />
                    ) : (
                        <Text style={styles.emptyBox}>Select an image</Text>
                    )}
                </View>


                

                {IMAGES_DATA.map(image => (
                    <TouchableOpacity key={image.id} onPress={() => handleImagePress(image.id)}>
                        <Image source={image.source} style={styles.thumbnail} />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    );
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
    imageList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    thumbnail: {
        width: 100,
        height: 100,
        margin: 5,
    },
    selectedImageContainer: {
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
    selectedImage: {
        width: 200,
        height: 200,
    },
    emptyBox: {
        fontSize: 18,
        color: '#666',
    },
});

export default EditProfile;
