import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-football' color='red'  size={100} />
        <Text>Open up App.js to start working on your app!  cool right</Text>
        <Text>Changes you make will automatically reload.  more change...heere...</Text>
        <Text>Shake your phone to open the developer menu. nice,,</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
