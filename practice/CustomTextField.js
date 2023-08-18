import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CustomTextField = ({handleCountryChange}) => {
    let countries = [
        { name: 'India', code: '+91', alpha2Code: 'IN', flag: '🇮🇳' },
        { name: 'United States of America', code: '+1', alpha2Code: 'US', flag: '🇺🇸' },
        { name: 'United Kingdom', code: '+44', alpha2Code: 'UK', flag: '🇬🇧' },

    ];

    const [selectedCountry, setSelectedCountry] = useState({ name: 'India', code: '+91', alpha2Code: 'IN', flag: '🇮🇳' });
    const [phoneNumber, setPhoneNumber] = useState('');

    const updateCountry = () => {
        setSelectedCountry({ name: 'United States of America', code: '+1', alpha2Code: 'US', flag: '🇺🇸' })
        handleCountryChange(selectedCountry)
    }

    return (
        <View style={styles.container}>
            <View style={styles.dropdownBGView} >
                <TouchableOpacity style={styles.dropdownView} onPress={()=>updateCountry}>
                <Text style={styles.flag}>{selectedCountry.flag}</Text>
                <Text style={styles.countryCodeLabel}>{selectedCountry.alpha2Code}</Text>
                <Text style={styles.countryCodeLabel}>{selectedCountry.code}</Text>
                <Text style={styles.downArrowLabel}>v</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.phoneNumberText}
                value={phoneNumber}
                keyboardType='numeric'
                onChangeText={setPhoneNumber}
                
            />

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height:50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // margin: 5
        borderRadius: 20,
        borderWidth:2,
        borderColor: '#bbb',

    },

    dropdownBGView: {
        borderRadius: 18,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:10,
    },
    dropdownView: {
        flexDirection: 'row',
        // borderRadius: 15,
        // backgroundColor: 'blue',
        // paddingHorizontal: 5,
        // marginRight: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    flag: {
        fontSize: 22,
        marginRight: 5,
        // marginLeft: 5,
    },
    countryCodeLabel: {
        fontSize: 18,
        marginRight: 5,
    },
    downArrowLabel: {
        fontSize: 14,
        // marginRight: 10,
    },
    phoneNumberText: {
        // borderColor: 'red',
        flex: 1,
        padding:10,
    },
});

export default CustomTextField;