import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";


const ListScreen = () => {

  const friends = [

    { name: ' Faizan', age: '10' },
    { name: ' Mariam', age: '9' },
    { name: ' Rayyan', age: '6' },
    { name: ' Ruqaiya', age: '5' },
  ];


  //return <Text style={styles.text_header}>List Screen</Text>;

  return (
    <FlatList
      //horizontal          showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {

        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        )

      }}
    />

  );

};

const styles = StyleSheet.create({

  text_header: { fontSize: 20, color: 'red', textAlign: "center" },

  textStyle: { marginVertical: 30 }

  // textStyle: {marginHorizontal: 10}


})



export default ListScreen;



/*
---Use in Another Master File Like APP.JS

import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen   ------ Change as per requirement

  },


*/