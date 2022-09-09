import React from 'react';
import { View, StyleSheet, Image } from "react-native";


export default function Tabuleiro(props) {
     
    return (

        <View style={style.container}>
            <View style={style.linha}>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[0]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[1]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[2]} />
                </View>
            </View>
            <View style={style.linha}>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[3]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[4]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[5]} />
                </View>
            </View>
            <View style={style.linha}>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[6]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[7]} />
                </View>
                <View style={style.coluna}>
                    <Image style={style.imagem} source={props.tabuleiro[8]} />
                </View>
            </View>
        </View>
    ); 
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff',
        borderColor: '#f0ffff',
        borderRadius: 20,
        margin: 36,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 26,
        flexWrap: 'wrap'
    },
    linha: {
        flexDirection: 'row'
        
    },
    coluna: {
        width: '100px',
        height: '100px',
        borderWidth: '1px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    imagem: {
        width: '70px',
        height: '70px'
    }
});


