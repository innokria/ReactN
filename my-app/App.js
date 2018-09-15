import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Text, View } from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';





class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    /*setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);*/
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}




export default class Bananas extends Component {



 static navigationOptions = {
    title: 'Welcome',
  };
  render() {
//const { navigate } = this.props.navigation;

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (

      <View>
      <Image source={pic} style={{width: 193, height: 110}}/>

       
        <Text>Login Page UI Will be added soon!</Text>


         <Blink text='I am testing UI' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />


      </View>

    );

    /*return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );*/
  }
  
  
}

