import React, { Component } from 'react';  
import { StyleSheet,View,Text,StatusBar} from 'react-native';  
  
export default class FlexDirectionBasics extends Component {  
    render() {  
        return (  
          
            <View style={styles.body}> 
            <StatusBar
              backgroundColor='red'
            >

            </StatusBar>
             
          </View>

        );  
    }  
}  
const styles = StyleSheet.create({  
    body:{
      flex:1
    }
  });  