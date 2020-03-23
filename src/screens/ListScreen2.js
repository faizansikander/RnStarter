import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";


const ListScreen2 = () => {

    const friends = [

        { name: 'Faizan - Age 1', key: 'A' },
        { name: 'Zeeshan - Age 2', key: 'B' },
        { name: 'Sikander = Age 3', key: 'C' },
        { name: 'Rayyan - Age 4', key: 'D' },

    ];

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {

                return (<Text>{item.name}</Text>)

            }}
        />

    );




};


const styles = StyleSheet.create({

    textStyle: { fontSize: 30 }

});


export default ListScreen2;