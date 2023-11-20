import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";

import ColorChanger from "../components/ColorChanger";

export default ColorScreen = () => {
    const INCREMENTO = 5;

    const [vermelho, setVermelho] = useState(0)
    const [verde, setVerde] = useState(0)
    const [azul, setAzul] = useState(0)

    const setColor = (colorName, incremento) => {
        if (colorName ==="vermelho"){
            if (vermelho +incremento > 255 || vermelho + incremento < 0){
                return
            } else {
                setVermelho(vermelho + incremento)
            }
        }
    }

    return(
        <View>
            <Text>Place Holder temp</Text>
            <ColorChanger onIncrease={() => setColor("vermelho", INCREMENTO)} onDecrease={() => setColor("vermelho", INCREMENTO* -1)} name = "Vermelho"/>
            <ColorChanger onIncrease={() => setVerde(verde + INCREMENTO)} onDecrease={() => setVerde(verde - INCREMENTO)} name = "Verde"/>
            <ColorChanger onIncrease={() => setAzul(azul + INCREMENTO)} onDecrease={() => setAzul(azul - INCREMENTO)} name = "Azul"/>
            <View style={{ height: 200, width: 200, backgroundColor: `rgb(${vermelho}, ${verde}, ${azul})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({})