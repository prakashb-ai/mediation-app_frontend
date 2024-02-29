import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Home from '../mediation_app/src/screens/Home'


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default App;