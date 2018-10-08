import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class Friend extends React.Component {


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