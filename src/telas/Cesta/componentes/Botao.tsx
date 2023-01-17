import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Texto from '../../../componentes/Texto'

export default function Botao({texto, onPress}: {texto: string, onPress: () => void}) {
  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
        alignItems: "center",
      },
      textoBotao: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    
      }
    })