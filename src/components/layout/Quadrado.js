import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default props => {
    return (
        <SafeAreaView style={{
            height: 20,
            width: 20,
            backgroundColor: props.cor || '#000'
        }}>
            
        </SafeAreaView>
    );
}
