import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Texto from "../../../components/Texto";

export default function Item({ item: {nome, image} }){

    return <View style={styles.iten}>
        <Image source={image} style={styles.image}/>
        <Texto style={styles.name}>{nome}</Texto>
    </View>;
    // return(
    //     <>
    //         <Texto style={styles.title}>{title}</Texto>
    //         <FlatList
    //             data={lista}
    //             renderItem={renderItem}
    //             keyExtractor={({nome}) => nome} 
    //         />
    //         {/* {lista.map(({nome, image}) => {
    //            return (
    //                 <View key={nome} style={styles.iten}>
    //                     <Image source={image} style={styles.image}/>
    //                     <Texto style={styles.name}>{nome}</Texto>
    //                 </View>
    //            );
    //         })} */}

    //     </>
    // );
}

const styles = StyleSheet.create({
    iten: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
});
