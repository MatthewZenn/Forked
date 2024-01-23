import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Post = (props) => {

  return (
    <View style={Styles.box}>
      <Text style={Styles.title}>{props.name}</Text>
      <Text style={Styles.caption}>{props.caption}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  box: {
    paddingHorizontal: 0,
    maxHeight: 200,
    width: 350,
    marginVertical: 5,
    backgroundColor: 'rgb(4, 8, 16)',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    borderColor: 'rgb(44, 50, 59)',
    borderWidth: 1,
  },
  title: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1D80FC'
  },
  caption: {
    alignSelf: 'center',
    marginHorizontal: 5,
    fontSize: 16,
    color: 'white'
  }
});

export default Post;