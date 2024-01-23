import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Text}>Forked</Text>
      </View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  Text: {
    position: 'relative',
    color: '#000',
    fontSize: 30,
    top: 40,
    left: 70,
    fontWeight: 'bold',
  },
  Header: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    top: '0%',
    margin: 0,
  },
});
