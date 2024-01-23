import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import Post from './Components/post';

var search_query = TextInput.Text;
var request = "https://api.github.com/topics/"+search_query;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Image style={styles.logo} source={require('./assets/logo_thin.png')}/>
        <TextInput style={styles.Search} placeholder='Search' editable placeholderTextColor='rgb(108, 118, 130)'></TextInput>
      </View>
      <View style={styles.feed}>
        <ScrollView>
          <Post name={'User/test1'} caption={'test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test2'} caption={'test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test3'} caption={'test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test4'} caption={'test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test5'} caption={'test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test6'} caption={'test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test7'} caption={'test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test8'} caption={'test caption goes here to see how multiple lines should be sized'}/>
          <Post name={'User/test9'} caption={'test caption goes here to see how multiple lines should be sized. test caption goes here to see how multiple lines should be sized.'}/>
          <Post name={'User/test10'} caption={'test caption goes here to see how multiple lines should be sized'}/>
        </ScrollView>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.homebutton}>
          <Image style={styles.bico} source={require('./assets/home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.explorebutton}>
          <Image style={styles.bico} source={require('./assets/explore.png')}/>
        </TouchableOpacity>
      </View>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  Text: {
    position: 'relative',
    color: '#fff',
    fontSize: 20,
    top: 70,
    left: 50,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  Header: {
    position: 'absolute',
    backgroundColor: 'rgb(4, 8, 16)',
    height: 120,
    width: '100%',
    top: '0%',
    margin: 0,
    borderBottomColor: 'rgb(44, 50, 59)',
    borderBottomWidth: 1
  },
  logo: {
    width: 60,
    height: 60,
    position: 'absolute',
    zIndex: 1,
    top: 45,
    left: 10,
  },
  Search: {
    width: 265,
    height: 50,
    backgroundColor: 'rgb(4, 8, 16)',
    position: 'relative',
    top: 50,
    left: 75,
    borderRadius: 15,
    padding: 10,
    fontSize: 18,
    borderColor: 'rgb(44, 50, 59)',
    borderWidth: 1,
    color: 'white'
  },
  feed: {
    width: '100%',
    backgroundColor: 'rgb(4, 8, 16)',
    height: '85%',
    top: 60,
    zIndex: -1,
    overflow: 'scroll',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(4, 8, 16)',
    borderTopColor: 'rgb(44, 50, 59)',
    borderTopWidth: 1,
    zIndex: 20
  },
  homebutton: {
    width: '50%',
    height: 60,
    left: 0,
    top: 0,
    backgroundColor: 'rgb(4, 8, 16)',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#1D80FC',
  },
  explorebutton: {
    position: 'absolute',
    width: '50%',
    height: 60,
    left: '50%',
    top: 0,
    backgroundColor: 'rgb(4, 8, 16)',
    alignItems: 'center'
  },
  bico: {
    width: 30,
    height: 30,
    top: 12
  }
});
