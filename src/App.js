/* Primeiro componente */
import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";

import Quadrado from './components/layout/Quadrado';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from "./components/relacao/Familia";
// import Filhos from "./components/relacao/Filhos";
// import ParImpar from "./components/ParImpar";
// import Diferenciar from "./components/Diferenciar";
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from "./components/indireta/Pai";
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulo";
// import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";
// import CompPadrao, { Comp1, Comp2 } from "./components/Mult";
// import Primeiro from './components/Primeiro';

export default () => (
    <SafeAreaView style={style.App}>
        <Quadrado />
        <Quadrado cor='#F00' />
        <Quadrado cor='#0F0' />
        {/* 
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com'}} />
        <UsuarioLogado usuario={{ nome: 'Ana'}} />
        <UsuarioLogado usuario={{ email: 'carlos@empresa.com'}} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Filhos nome="Bia" sobrenome="Arruda" />
            <Filhos nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Filhos nome="Marcos" sobrenome="Carmelo" />
            <Filhos nome="Carlos" sobrenome="Carmelo" />
        </Familia>
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro de Produto"
                secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
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
