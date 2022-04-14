import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import Calendar from "../assets/images/DateTimePicker/calendar.png";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";


export default function DateTimePicker({minDate,maxDate,selectDate}) {
    // Data useState function  datetimepicker
    const [isDatePickerVisible, setDateTimePickerVisible] = useState(false);
    const [dateShow, setShowDate] = useState("");
    const handleConfirm = (date) => {
        const DateFormat = moment(date).format("DD/MM/YYYY");
        setShowDate(DateFormat);
        selectDate(date);
        hideDatePicker();
    };
    const showDatePicker = () => {
        setDateTimePickerVisible(true)
    };
    const hideDatePicker = () => {
        setDateTimePickerVisible(false)
    };
    return (
        <View style={styles.warp_showdate}>
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput style={styles.text_showdate} placeholder="dd/mm/yyyy">{dateShow}</TextInput>
                <Image style={styles.img_calendar} source={Calendar} />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                locale="vi" // Use "en_GB" here
                date={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={minDate}
                maximumDate={maxDate}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    text_showdate: {
        paddingLeft: 50,
        marginVertical: 5,
        height: 45,
        backgroundColor: "#FFFFFF",
    },
    img_calendar: {
        position: "relative",
        marginLeft: 10,
        bottom: 35,
    }
})