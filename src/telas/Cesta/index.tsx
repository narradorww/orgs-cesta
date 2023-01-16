import * as React from "react";
import {
  
  View,
  StyleSheet,

} from "react-native";
import Texto from "../../componentes/Texto";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

function Cesta() {
  return (
    <>
      <Topo />
      <Detalhes />
      <View style={estilos.cesta}>
        <Texto style={estilos.preco}>R$40,00</Texto>
      </View>
    </>
  );
}

export default Cesta;

const estilos = StyleSheet.create({
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
  },
});
