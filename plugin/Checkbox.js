import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Tick from "./assets/tick.png"

export default function CheckBox({ title, onSelect }) {
    const [ischeck, setIsCheck] = useState(false);
    const ClickCheckBox = (value) => {   
        setIsCheck(!value) 
        value === true ? onSelect(0) : onSelect(1)
       
    };
    return (

        <Pressable onPress={() => ClickCheckBox(ischeck)}>
            <View style={styles.wrap_check}>
                <View style={styles.checkbox} >
                    {ischeck && ischeck == true ? <Image styles={styles.img_check} source={Tick} /> : null}
                </View>
                <Text style={styles.txt_title_checkbox}>{title}</Text>
            </View>
        </Pressable >


    );
}

const styles = StyleSheet.create({
    wrap_check:{
        flexDirection:"row",
    },
    checkbox: {
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 22,
        width: 22,
        borderWidth: 2,
        borderColor: "grey",
        backgroundColor: "#FFF",
    },
    txt_title_checkbox:{
        fontSize:12,
        fontWeight:"800",
    }
})