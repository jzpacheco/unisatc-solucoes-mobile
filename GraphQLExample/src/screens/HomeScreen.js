import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import { useQuery } from "@apollo/client"

import { CONTINENT_QUERY } from "../queries/Query";

export default HomeScreen = () =>{
    const {data, loading} = useQuery(CONTINENT_QUERY);

    const ContinentItem = ({ continent }) => {
        const {name, code} = continent;
        return (
            <Pressable>
                <Text>{"\n"}{name}</Text>
                <Text>{code}</Text>
            </Pressable>
        )
    }

    if (loading) {
        return <Text>Processando...</Text>
    }
    return (
        <View>
            <Text>Lista de Continentes</Text>
            <FlatList data={data.continents}
            renderItem={({ item }) => <ContinentItem continent={item}/>}
            keyExtractor={(item, index) => index}
            />
        </View>
    )
}

const style = StyleSheet.create({

})