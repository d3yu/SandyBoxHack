import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { db } from '../config/firebase';

import Svg, {Path} from 'react-native-svg';

const backgroundImg = require('../assets/background2.png');


export default function CheckListPage ({ navigation }) {
    
    const [valueRamp, setRamp] = useState(false);
    const [valuewheel, setwheel] = useState(false);
    const [valueAudio, setAudio] = useState(false);
    const [valueLanguage, setLanguage] = useState(false);
    const [valueWalking, setWalking] = useState(false);
    const [valueAutoDoor, setAutoDoor] = useState(false);
    const [valueLowFloor, setLowFloor] = useState(false);
    const [valueReclining, setReclining] = useState(false);

    const sendHelpData = async () => {
        await setDoc(doc(db, "user", "help-id"), {
            ramp: valueRamp,
            wheelChair: valuewheel,
            audGuidnace: valueAudio,
            signLang: valueLanguage,
            cane: valueWalking,
            autoDoor: valueAutoDoor,
            lowFloor: valueLowFloor,
            recSeat: valueReclining
        });
        navigation.navigate("MainPage")
        console.log(valueRamp);
        console.log(valuewheel);
        console.log(valueAudio);
        console.log(valueLanguage);
        console.log(valueWalking);
        console.log(valueAutoDoor);
        console.log(valueLowFloor);
        console.log(valueReclining);
    }
    

    return (
        <View style={styles.container}>
          
          <ImageBackground source = {backgroundImg} resizeMode = "cover" style={styles.image}>
          <Text style = {styles.textTitle}>Tell us what we can do for you</Text>
          <View style = {styles.container2}>
            
          
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="ramp"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueRamp) => {setRamp(valueRamp)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="wheelchair seat"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valuewheel) => {setwheel(valuewheel)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="audio guidance"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueAudio) => {setAudio(valueAudio)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="sign language screen"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueLanguage) => {setLanguage(valueLanguage)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="cane holder"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueWalking) => {setWalking(valueWalking)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="automatic door"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueAutoDoor) => {setAutoDoor(valueAutoDoor)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="low floor"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueLowFloor) => {setLowFloor(valueLowFloor)}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="black"
            unfillColor="#FFFFFF"
            text="reclining seat"
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: 'Arial Hebrew' }}
            onPress={(valueReclining) => {setReclining(valueReclining)}}
          />
        
          
          
          </View>

          <View style = {styles.completeButton}>
            <Text style = {styles.textComplete} onPress = {sendHelpData}>Complete</Text>
          </View>
        </ImageBackground>
          
        </View>
        
    
    );
}

const LogoSvg = () => {
    return (
      <View style = {styles.logo}>
          <Svg width="109" height="106" viewBox="0 0 109 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M40.0898 39.0093C42.0601 39.1904 44.6395 39.5264 47.4073 40.149C52.4863 41.2915 57.6943 43.2897 61.1065 46.6086C64.5145 49.9234 66.5657 54.9774 67.7397 59.9066C68.3772 62.5835 68.7228 65.0792 68.9099 66.9904C66.9395 66.809 64.3602 66.4726 61.5924 65.8497C56.5132 64.7067 51.305 62.7082 47.8929 59.39C44.4853 56.0762 42.4341 51.0227 41.2602 46.0936C40.6225 43.4165 40.2769 40.9206 40.0898 39.0093Z" stroke="white" strokeWidth="5"/>
            <Path d="M91.875 53C91.875 72.9289 75.2344 89.25 54.5 89.25C33.7656 89.25 17.125 72.9289 17.125 53C17.125 33.0711 33.7656 16.75 54.5 16.75C75.2344 16.75 91.875 33.0711 91.875 53Z" stroke="white" strokeWidth="5"/>
          </Svg>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  container2: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 318,
    height: 448,
    top: 207,
    left: 47,
    borderRadius:20,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingLeft: 20,
    

  },
    image: {
      flex: 1,
      width: '100%',
      justifyContent: "center",
    },
    completeButton: {
      position: 'absolute',
      width: 100,
      height: 41,
      top: 725,
      left: 145,
      borderRadius: 30,
      backgroundColor: 'rgba(3,62,168,1)',
      justifyContent: 'center',
      
    },
    textComplete: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Arial Hebrew',
    },
    textTitle: {
      position: 'absolute',
      left: 40,
      top: 93,
      textAlign: 'center',
      fontWeight: 'bold',
      // fontStyle: 'italic',
      fontFamily: 'Arial Hebrew',
      fontSize: 23,
    },


})