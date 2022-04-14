import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";


const RadioButton =({ data, onSelect }) =>{
    const [userOption, setUserOption] = useState('All');
    const selectHandler = (value) => {
        setUserOption(value);
    };
    useEffect(()=>{
        onSelect(userOption);
    },[userOption])
    return (
        <View style={styles.wap_check}>
            {data && data.length > 0 && data.map((d, index) => {
                return (
                    <Pressable onPress={()=>selectHandler(d.value)} key={index} >
                            <View style={styles.warp_radio_button} >
                                {d.value === userOption ?  <View style={styles.Radio_checked}><View style={styles.inly_Radio_checked}></View></View>: <View style={styles.Radio_unchecked}></View>}
                                <Text>{d.title}</Text>
                            </View> 
                    </Pressable>
                );
            })}
        </View>

    );
}

export default RadioButton
const styles = StyleSheet.create({
    inly_Radio_checked:{
        borderRadius:10,
        backgroundColor:"orange",
        height:10,
        width:10,
    },
    Radio_checked:{
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:5,
        borderWidth:3,
        borderColor:"orange",
        borderRadius:10,
        backgroundColor:"#FFF",
        height:20,
        width:20,
    },
    Radio_unchecked:{
        marginHorizontal:5,
        borderWidth:3,
        borderColor:"#00000029",
        borderRadius:10,
        backgroundColor:"#FFF",
        height:20,
        width:20,
    },
    wap_check: {
        height: 45,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    warp_radio_button: {
        flexDirection: "row",
    },
    img_radio_buton_show: {
        display:"none",
        position: "relative",
        top: 5,
        marginHorizontal: 5,
    },
    img_radio_buton_hide: {
        position: "relative",
        top: 5,
        marginHorizontal: 5,
    }
})