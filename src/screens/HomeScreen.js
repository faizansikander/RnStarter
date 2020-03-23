import React from "react";
import { Text, StyleSheet, View,Button,TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
return <View>
  
<Text style={styles.text}>Hi there</Text>
<Button
  
 onPress={() => navigation.navigate('Component')}


  title="Go to Component Screen"

/>

<Button
  
 onPress={() => navigation.navigate('Image')}


  title="Go to Image Screen"

/>




<Button
  
 onPress={() => navigation.navigate('Counter')}


  title="Go to Counter Screen"

/>



<Button
  
 onPress={() => navigation.navigate('Color')}


  title="Go to Color"

/>




<TouchableOpacity onPress={() => navigation.navigate('List')} >
  
  <Text style={styles.text} >Go to List Screen</Text>

  </TouchableOpacity>


</View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color : 'blue',
    textAlign: "center"
    
  }
});

export default HomeScreen;
