import * as React from 'react';
import {  Image, View, StyleSheet} from 'react-native';
import Texto from '../../../componentes/Texto';


export default function Item({item: {nome, imagem}}) {

   return (
    <View style={estilos.item} > 
    <Image style={estilos.image} source={imagem} />
    <Texto style={estilos.texto}>{nome}</Texto>
    </View>
   )
}


const estilos = StyleSheet.create({
    
    item:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        },
    image:{
        marginLeft: 8,
        width: 46,
        height: 46,
    },
    texto:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646",
    }
});