import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = (props) => {
    const pets =[
        {pet:"Gato"},
        {pet:"Cachorro"},
        {pet:"Pato"},
        {pet:"Cobra"},
        {pet:"Peixe"},
        {pet:"Capetinha na Garrafa"},
        {pet:"Gnomio"},
    ]

    return( <><FlatList keyExtractor={(pet) => pet.pet} data={pets} renderItem={({ item }) => {
        return <Text style={list_styles.textStyle}>{item.pet}</Text>;
    } } />
    <Button title="Sair"
        onPress={() => props.navigation.navigate("Final")} /></>
    )
};

const list_styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        fontSize:15
    }
});

export default ListScreen;