import * as React from "react";
import { FlatList } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

type CestaProps = {
  topo: {
    titulo: string;
  };
  detalhes: {
    nome: string;
    logoFazenda: string;
    nomeFazenda: string;
    descricao: string;
    preco: string;
    botao: string;
    };
    itens: {
      lista:[
        nome: string,
        imagem: string
      ]
     
    };
};


function Cesta({topo, detalhes, itens}: CestaProps) {
  return (
    <>
    <FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome})=> nome}
    ListHeaderComponent={() =>{
      return (
        <>
        <Topo {...topo} />
        <Detalhes {...detalhes} />
        </>
      )
    }}
      />
    </>
  );
}

export default Cesta;


