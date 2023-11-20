import React, {useState} from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default CounterScreen = () => {
    const [contador, setContador] = useState(0);
    return(
        <View>
            <Text>Contador</Text>
            <Button title="Incrementar" onPress={() => { setContador(contador + 1) }}/>
            <Button title="Decrementar" onPress={() => { setContador(contador - 1) }}/>
            <Text>Contador: {contador}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})