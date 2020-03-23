import React from "react";
import {Text,StyleSheet,View} from "react-native";


const WelcomeScreen = () => {

const v_welcome_msg   = <Text style={style.heading_sc}>Getting Started With React Native!</Text>;
const v_name    = "Muhammad Faizan";

return (
    <View>

    {v_welcome_msg}

        <Text>My Name is {v_name}</Text>

    </View>
)

}



const style = StyleSheet.create({


    heading_sc: {fontSize:45,fontWeight:"bold"}



})


export default WelcomeScreen;