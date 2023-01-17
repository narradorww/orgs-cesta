import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "./Botao";

type DetalhesProps = {
  nome: string;
  logoFazenda: string;
  nomeFazenda: string;
  descricao: string;
  preco: string;
  botao: string;
};

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao
}: DetalhesProps) {
  return (
    <>
    <View style={estilos.container}>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={logoFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <View style={estilos.cesta}>
      <Texto style={estilos.preco}>{preco}</Texto>
      </View>
        <Botao texto={botao} onPress={()=>{}} />
    </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container:{
    margin: 8,
  },
  titulo:{
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32
},
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
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
});
