import React from 'react'
import { Text, StyleSheet } from 'react-native'

type TextoProps = {
    children: string
    style: any
}

export default function Texto({children, style}: TextoProps) {
    let estilo = estilos.texto

    if(style?.fontWeight === 'bold' ){
        estilo = estilos.textoNegrito
    }

    return (
        <Text style={[style, estilo]}> {children} </Text>
    )
}


const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})
