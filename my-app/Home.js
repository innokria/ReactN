

import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, TouchableWithoutFeedback,FlatList, TouchableHighlight,Text, Image, Alert, YellowBox } from 'react-native';
import {createStackNavigator,} from 'react-navigation';


  


 
export default class Home extends Component {
 
 constructor(props) {
 
   super(props);
 
   this.state = {
 
     isLoading: true
 
   }

 
 
   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);
 
 }
 
GetItem (item) {

 this.props.navigation.navigate(
    'Friend',
    { item },
  );
 
 }

 actionOnRow(item) {
   this.props.navigation.navigate(
    'Friend',
    { item },
  );
}
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
 webCall=()=>{
 
  return fetch('http://innokria.com/LOA/Json/saru_list')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
            dataSource: responseJson.data,
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
 
 }
 
 componentDidMount(){
 
  this.webCall();
 
 }
 
 render() {
 
   if (this.state.isLoading) {
     return (
 
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
         <ActivityIndicator size="large" />
 
       </View>
       
     );
 
   }
 
   return (
  
     <View style={styles.MainContainer}>
     
 
 
       <FlatList
       
        data={ this.state.dataSource }
        
        ItemSeparatorComponent = {this.FlatListItemSeparator}
 
        renderItem={({item}) => 

        <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
        
            <View style={{flex:1, flexDirection: 'row'}}>

   
              <Image source = {{ uri: item.link }} style={styles.imageView}  />
            
              

              <Text 
              style= {styles.textView} >{item.subTitle}</Text>

            </View>

            </TouchableWithoutFeedback>
        
          }
 
        keyExtractor={(item, index) => index.toString()}
        
        />
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
imageView: {
 
    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
 
},
 
textView: {
 
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
 
}
 
});



