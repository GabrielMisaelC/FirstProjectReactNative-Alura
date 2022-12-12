import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }){

    let styles = stylesSheet.text;

    if (style?.fontWeight === 'bold'){
        styles = stylesSheet.textBold;
    }

    return <Text style={[ style, styles]}>{ children }</Text>
}

const stylesSheet = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
})