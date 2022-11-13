/* Primeiro componente */
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Titulo from "./components/Titulo";
// import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";
// import CompPadrao, { Comp1, Comp2 } from "./components/Mult";
// import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <Titulo principal="Cadastro de Produto"
                secundario="Tela de Cadastro do Produto" />
        {/* <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min='1' max='94' />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});
