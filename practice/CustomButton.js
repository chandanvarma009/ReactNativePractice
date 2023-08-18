import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const CustomButton = ({onPress, title, isLoading}) => {
    // const [showLoader, setShowLoader] = useState(true);

//   const buttonPressEvent = () => {
//     // Perform actions
//     setShowLoader(false);
//   }
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonView} onPress={onPress} >
             {
                isLoading ?
                    <ActivityIndicator style={styles.buttonLoader} color={'blue'} size={'small'} />
                    :
                    null
            }
                <Text style={styles.buttonLabel}>{title}</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        justifyContent:'flex-end'

    },
    buttonView: {
        
        padding: 20,
        fontSize: 20,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth:2,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        fontSize: 20,
    },
    buttonLoader: {
        marginRight: 10,
    },
});

export default CustomButton;