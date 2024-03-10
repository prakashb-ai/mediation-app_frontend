import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Appnavigation from './src/navigations/Appnavigation'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Appnavigation/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignContent:'center'
  },
  
});

export default App;