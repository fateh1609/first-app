import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlueButton extends Component{
render(){
  return<Button color="blue" title="CLICK ME"></Button>;
}
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:400}}>
      <BlueButton/>
       <Text style={{marginTop:-60,marginLeft:120}}>Fateh's first App</Text>
    </View>

    );
  }
}