import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default props => {
    
    return (
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.V0} />
            <SafeAreaView style={style.V1} />
            <SafeAreaView style={style.V2} />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        height: 300,
        backgroundColor: '#36c9a7'
    },
    V1: {
        flexGrow: 9,
        backgroundColor: '#ff801a'
    },
    V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1'
    }
});
