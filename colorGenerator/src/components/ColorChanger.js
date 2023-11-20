import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default ColorChange = ({name, onIncrease, onDecrease}) =>{
    return (
        <View>
            <Text>{name}</Text>
            <Button title={`Incrementar ${name}`} onPress={() => onIncrease()}/>
            <Button title={`Decrementar ${name}`} onPress={() => onDecrease()}/>
            
        </View>
        )
}