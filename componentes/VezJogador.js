import React from "react"
import { StyleSheet, Text, View} from "react-native"
export default function VezJogador(props) {
    return (
        <View style={style.container}>
            <Text style={style.texto}>{props.vezjogador}</Text>
        </View>
    );
    }
const style = StyleSheet.create({
        container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '149px',
        height: '55px',
        borderRadius: '40px'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});



  

