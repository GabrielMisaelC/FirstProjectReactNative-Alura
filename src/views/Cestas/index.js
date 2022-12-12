import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import Top from "./components/Top";
import Item from './components/Item';
import Detalhes from "./components/Detalhes";
import Texto from "../../components/Texto";

export default function Cesta({ top, detalhes, itens}){
    return (
            <SafeAreaView >
                <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({nome}) => nome} 
                ListHeaderComponent={() => 
                {
                    return <>
                        <Top {...top}/>
                        <View style={styles.cesta}>
                            <Detalhes {...detalhes}/>
                            <Texto style={styles.title}>{itens.title}</Texto>
                        </View>
                    </>
                }}
            />
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    }
});