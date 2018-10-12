import React from 'react';
import { StyleSheet, Text, View ,Image,Button,YellowBox } from 'react-native';
import getDirections from 'react-native-google-maps-directions'
export default class Friend extends React.Component {

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


handleGetDirections = (lat,lon) => {

  

   
    const data = {
       source: {
        latitude:  "",
        longitude:  ''
      },
      destination: {
        latitude:  lat,
        longitude: lon
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }

    getDirections(data)
  }


  render() {
    return (
      <View style={styles.MainContainer}>
     


           <Image source = {{ uri: this.props.navigation.state.params.item.link }} 
            style={styles.imageView}  />
            
           <Text 
              style= {styles.textView} >{this.props.navigation.state.params.item.title}

             
           </Text>



             <Text selectable={true}
              style= {styles.textView} >

              {this.props.navigation.state.params.item.description}
           </Text>

          <Button onPress={() => this.handleGetDirections(this.props.navigation.state.params.item.latitude,this.props.navigation.state.params.item.longitude)}  title="Get Directions" />

      </View>
    );
  }
}




const styles = StyleSheet.create({

imageView: {
 
    width: '70%',
    height: 300 ,
    margin:50,
    borderRadius : 7,
    alignItems:'center'
 
},
 
textView: {
 
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
 
},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});