import React from "react";
import {Text,StyleSheet,View} from "react-native";

const ComponentScreen = () => {

  const  v_organization  = <Text style={styles.text_header} >Zainab Rehabilitation Center</Text>    ;
  const  v_name = "Muhammad Faizan Sikander";
  

return (
<View>
{v_organization} 
<Text style={styles.text_data} >Welcome Mr.{v_name}</Text>
</View>)
}


const styles = StyleSheet.create({


text_header: {fontSize: 20,color: 'red',textAlign: "center"},
text_data: {fontSize: 15,color: 'black',textAlign:"center"},
text: {fontSize: 20,color: 'purple'}

}

)



export default ComponentScreen;
