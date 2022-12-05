import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default ({ styleNum }) => {
    return (
        <SafeAreaView style={style.Container}>
            <Text style={[Estilo.txtG, style.Num]}>
                {styleNum}
            </Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center'
    },
    Num: {
        color: '#fff'
    }
})