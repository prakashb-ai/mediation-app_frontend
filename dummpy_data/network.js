import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import React,{useState,useEffect} from 'react'
import NetInfo from "@react-native-community/netinfo";
import Appnavigation from '../navigations/Appnavigation';


const { width, height } = Dimensions.get('window') || {width:0, height:0}

const Network = () => {
    const [networkStatus, setNetworkStatus] = useState("");

    useEffect(() => {
      const handleConnectivityChange = (state) => {
        if (state.isConnected) {
         // setNetworkStatus("green");
        } else {
         // setNetworkStatus("red");
        }
      };
  
      NetInfo.addEventListener(handleConnectivityChange);
  
      //sendNetworkStatus(networkStatus);
  
      return () => {
        NetInfo.removeEventListener(handleConnectivityChange);
      };
    }, []);
  
    /*const sendNetworkStatus = async (status) => {
      try {
        const response = await fetch("http://localhost:8000/api/network-status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ NetworkIsOn: status === "green" ? true : false }),
        });
  
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    };*/
  
    return (
      <View style={styles.container}>
      {networkStatus === "green" ? (
        <Appnavigation/>
      ) : (
        <Image
          source={require('../../images/image_lost.jpg')}
          style={styles.images}
        />
      )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      opacity: 1,
    },
    text: {
      color: "white",
      fontWeight: "bold",
    },
    images:{
        height:height/2,
        width: width,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    }
  });

export default Network