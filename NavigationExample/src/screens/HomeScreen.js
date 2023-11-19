import React from "react";
import { Text,StyleSheet, SafeAreaView, View, Button } from "react-native";

const HomeScreen = (props) => {
    return(
        <SafeAreaView>
            <Text style={home_styles.text}>Bem-Vindo ao meu app React!</Text>
            <Button title="Lista de Pets"
                    onPress={() => props.navigation.navigate("List")}
            />
        </SafeAreaView>
    )
};

const home_styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;