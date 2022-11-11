import React from "react";
import { Text } from "react-native";
import Estilo from './estilo';

export default (props) => {
    return (
        <Text style={Estilo.txtG}>
            O valor de {props.max} é maior do que o valor de {props.min};
        </Text>
    )
}
