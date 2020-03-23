import React from "react";
import  {View,Text,StyleSheet} from "react-native";
import ImageDetail from "./ImageDetail";

const imageScreen = () => {

    return <View>     
           <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} Score="10"/>    
           <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} Score="20" />    
           <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} Score="30"/>    
           </View>
};


const styles = StyleSheet.create({});

export default imageScreen;