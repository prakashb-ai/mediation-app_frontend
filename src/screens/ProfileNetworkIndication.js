import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const {width,height} = Dimensions.get('window') || {width:0,height:0}

const ProfileNetworkIndication = () => {
  const [networkStatus, setNetworkStatus] = useState("");

  useEffect(() => {
    const handleConnectivityChange = (state) => {
      if (state.isConnected) {
        setNetworkStatus("green");
      } else {
        setNetworkStatus("red");
      }
    };

    NetInfo.addEventListener(handleConnectivityChange);

    sendNetworkStatus(networkStatus);

    return () => {
      NetInfo.removeEventListener(handleConnectivityChange);
    };
  }, []);

  

  const sendNetworkStatus = async (status) => {
    try {
      const response = await fetch("http://localhost:8000/api/network-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NetworkIsOn: status === "green" ? true : false }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          { backgroundColor: networkStatus === "green" ? "green" : "red" },
        ]}
      >
        <Text style={styles.text}>
          {networkStatus === "green" ? "" : ""}
        </Text>
      </View>
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
    width: Math.min(width,height)/15,
    height: Math.min(width,height)/15,
    borderRadius: Math.min(width,height)/15,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    borderWidth:2,
  },
  
});

export default ProfileNetworkIndication;