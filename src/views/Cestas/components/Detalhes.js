import React from "react";
import Texto from "../../../components/Texto";
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes({name, nameFazenda, describe, imageLogo, price, titleButton}){
    return(
        <>
                    <Texto style={styles.name}>{name}</Texto>
                    <View style={styles.fazenda}>
                        <Image source={imageLogo} style={styles.imageFazenda}/>
                        <Texto style={styles.nameFazenda}>{nameFazenda}</Texto>
                    </View>
                    <Texto style={styles.describe}>{describe}</Texto>
                    <Texto style={styles.price}>{price}</Texto>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {}}>
                       <Texto style={styles.textButton}>
                       {titleButton}
                       </Texto>
                    </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imageFazenda: {
        width: 32,
        height: 32,
    },
    nameFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 36,
    },
    describe: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26,
    }
});