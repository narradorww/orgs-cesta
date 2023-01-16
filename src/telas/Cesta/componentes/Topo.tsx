import * as React from 'react';
import { StyleSheet, Image,  Dimensions } from 'react-native';
import Texto from '../../../componentes/Texto';
import topo from '../../../assets/topo.png';

const { width, height } = Dimensions.get('screen');

export default function Topo() {
    return (
        <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
        </>



    );
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
        fontFamily: "MontserratBold",
      },
      titulo: {
        position: "absolute",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFF",
        textAlign: "center",
        padding: 16,
        fontFamily: "MontserratBold",
      }
    });






