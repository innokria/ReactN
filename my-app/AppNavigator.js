import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Friend from './Friend';

const AppNavigator = createStackNavigator({
  
Home: {screen: Home , navigationOptions: ({navigation}) => ({
  title: 'PICK ME',
  headerStyle: {
    backgroundColor: 'red'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    alignSelf:  'center'
  }
 })},

   //Friend: { screen: Friend},
Friend: {screen: Friend , navigationOptions: ({navigation}) => ({
  title: 'Detail',
  headerStyle: {
    backgroundColor: 'red'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    alignSelf:  'center'
  }
 })},

});

export default AppNavigator;