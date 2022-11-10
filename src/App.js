/* Primeiro componente */
import React from "react";
import { SafeAreaView } from "react-native";

import CompPadrao, { Comp1, Comp2 } from "./components/Mult";
import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </SafeAreaView>
);
