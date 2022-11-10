/* Primeiro componente */
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import CompPadrao, { Comp1, Comp2 } from "./components/Mult";
import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        backgroundColor: '#afafaf',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
