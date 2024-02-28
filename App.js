import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          <Text>Click me</Text>
        <View>
        </View>
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