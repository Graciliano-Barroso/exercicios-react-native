import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text } from 'react-native';
import Estilo from './estilo';

export default props => {
    let [nome, setNome] = useState('Teste');
    return (
        <SafeAreaView>
            <Text>{nome}</Text>
            <TextInput 
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </SafeAreaView>
    );
}