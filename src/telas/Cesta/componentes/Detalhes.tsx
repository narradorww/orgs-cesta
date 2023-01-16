import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Texto from '../../../componentes/Texto'
import Logo from './../../../assets/logo.png'

export default function Detalhes() {
    return (<>
    <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={Logo} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farms</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Uma cesta de produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
    </>
    )

}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        fontWeight: "bold",
      },
      nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    
      },
      fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
      },
      imagemFazenda: {
        width: 32,
        height: 32,
      },
      descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
      },
});

