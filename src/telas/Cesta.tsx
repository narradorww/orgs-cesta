import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Topo from '../../assets/topo.png';
import Logo from '../../assets/logo.png';

const { width, height } = Dimensions.get('screen');

type CestaProps = {
    text: string;
}

function Cesta(props: CestaProps) {
    return (
        <>
      <Image  source={Topo} style={estilos.topo}/>
      <Text style={estilos.titulo}>{props.text}</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda}source={Logo} />
        <Text style={estilos.nomeFazenda} >Jenny Jack Farms</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
        <Text style={estilos.preco}>R$40,00</Text>

      </View>
      </>
    );
}

export default Cesta;

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578/768 * width,
        fontFamily: 'MontserratBold'
        
    },
    titulo: {
        position: 'absolute',
        width: '100%',
        fontSize: 16,
        lineHeight: 26,
        color: '#FFF',
        textAlign: 'center',
        padding: 16,
        fontFamily: 'MontserratBold'
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color: '#464646',
        fontSize: 26,
        fontWeight: 'bold',
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular'
    },
    fazenda:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,

    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }


});
   