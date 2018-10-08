
import React from 'react';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {


constructor(props) {
      super(props)
      this.state = {
        possibleFriends: [
          'Allie',
          'Gator',
          'Lizzie',
        ],
        currentFriends: [],
        hero:5
      }
    }


  render() {
    return (
      <AppNavigator


    screenProps={ {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            hero:this.state.hero,
            //addFriend: this.addFriend,
          } }



      />
    );
  }
}