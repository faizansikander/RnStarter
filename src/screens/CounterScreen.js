import React, {useState} from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const CounterScreen = () => {
    const [counter,setcounter] = useState(0);

  return (
    <View>
        <Button title="Increase" onPress={ () => {

            //counter++;
            setcounter(counter + 1);
            console.log(counter);


        }}/>
        <Button title="Decrease" onPress={ ()=> {

            setcounter(counter - 1);
            console.log(counter);
        }        }/>
        <Text>Current Counter : {counter}</Text>
    </View>
     );
};
 
const styles=StyleSheet.create({});

export default CounterScreen;
