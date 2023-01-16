import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Topo from '../../assets/topo.png';

const { width, height } = Dimensions.get('screen');

type CestaProps = {
    text: string;
}

function Cesta(props: CestaProps) {
    return (
        <>
      <Image  source={Topo} style={estilos.topo}/>
      <Text style={estilos.titulo}>{props.text}</Text>
      </>
    );
}

export default Cesta;

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578/768 * width,
        
    },
    titulo: {
        position: 'absolute',
        width: '100%',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        padding: 16,
    }
});
   