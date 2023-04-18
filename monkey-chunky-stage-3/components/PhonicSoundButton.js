import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(){
    super()
    this.state={
      pressButtonIndex:""
    }
  }
  playSound = async soundChunk => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
           onPress={() => {
          this.playSound(this.props.soundChunk);
          this.setState({pressButtonIndex:this.props.buttonIndex})
          
        }} style={this.props.buttonIndex===this.state.pressButtonIndex
        ?[styles.button,{backgroundColor:"white"}]:[styles.button,{backgroundColor:"red"}]}>
        <Text style={this.props.buttonIndex===this.state.pressButtonIndex
        ?[styles.buttonText,{color:"red"}]:[styles.buttonText,{color:"white"}]}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width:"60%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    margin:5,
    backgroundColor:"red"
  },
  buttonText:{
    fontSize:30,
    textAlign:"center",
    color:"white"
  }

})