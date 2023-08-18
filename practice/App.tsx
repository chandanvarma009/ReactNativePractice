/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomTextField from './CustomTextField';
import CustomButton from './CustomButton';

// function App() {
// <View style={styles.container}>
//     <view style={styles.dropdownView}>
//     <Text>ala</Text>
//     </view>
//     <TextInput 
//         style = {styles.phoneNumberText}
//     />

// </View>
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         backgroundColor: 'red',
//     },
//     dropdownView: {
//         borderRadius: 10,
//         backgroundColor: 'gray',
//     },
//     flag: {

//     },
//     countryCodeLabel: {

//     },
//     phoneNumberText: {

//     },
// });



function App() {
  const [showLoader, setShowLoader] = useState(false);

  const handleButtonTapEvent = () => {
    console.log('button tapped');
    setShowLoader(!showLoader)
  }

  const handleCountryChange = () => {
    console.log('selected country');
    
  }

  return (

    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your mobile number</Text>
      <Text style={styles.labelTitle}>Mobile</Text>
      {/* <CountryPicker /> */}
      <CustomTextField handleCountryChange={handleCountryChange}/>

      <View style={styles.bottomView}>
        <Text>By continuing, I agree that infliuze may process my cell phone number.</Text>
        <Text>Read more</Text>
      </View>
      <CustomButton onPress={handleButtonTapEvent} title={'sdfghj'} isLoading={showLoader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    paddingTop: 90,
    margin: 10,
  },
  headerTitle: {
    fontSize: 24,
  },
  labelTitle: {
    fontSize: 20,
    paddingTop: 10,

  },
  bottomView: {

    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
    padding: 20,
    // margin:20,
  },
});





export default App;
