import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View, ImageBackground, TouchableOpacity} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../config/firebase';

import Svg, {Path} from 'react-native-svg';

// const auth = getAuth();
const backgroundImg = require('../assets/background2.png');

export default function CreateAccountPage ({ navigation }) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    //singup firebase
    const handleSignup = () => {
     createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
          console.log('Registered with:', user.email),
          navigation.navigate('CheckListPage');
      })
      .catch(error => alert(error.message),
       navigation.navigate('CreateAccountPage'))
      //Taking back to first page after an error
      //.then()
    }
  

  return (
    <View style={styles.container}>
      <ImageBackground source = {backgroundImg} resizeMode = "cover" style={styles.image}>
      <LogoSvg/>
      <Text style = {styles.codeText}>Sign Up </Text>
      <View style = {styles.inputText}>
        <TextInput placeholder = "Full name (First / Last)"
                   value = {name} 
                   style = {styles.nameText}
                   onChangeText = {setName} />
        <TextInput placeholder = "Enter your email"
                   value = {email} 
                   style = {styles.emailText}
                   onChangeText = {setEmail}/>
        <TextInput placeholder = "Enter your password"
                   value = {password} 
                   style = {styles.passwordText}
                   onChangeText = {setPassword}
                   secureTextEntry ={true}/>
        <TextInput placeholder = "Confirm Password"
                   value = {confirmPassword} 
                   style = {styles.confirmPasswordText}
                   onChangeText = {setConfirmPassword}
                   secureTextEntry ={true} />
      </View>

      <View style = {styles.buttonCreateAccount}>
        <Text style = {styles.buttonText} onPress = {handleSignup}>Complete</Text>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      image: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
      },
      codeText: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFFFF",
        position: 'absolute',
        width: 274,
        height: 38,
        left: 65,
        top: 370,
      },
      logo: {
        position: 'absolute',
        width: 109,
        height: 106,
        top: 256,
        left: 140,
      },
      emailText: {
        position: 'absolute',
        width: 288,
        height: 41,
        left: 51,
        top: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingLeft: 20,
      },
      passwordText: {
        position: 'absolute',
        width: 288,
        height: 41,
        left: 51,
        top: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingLeft: 20,
      },
      buttonCreateAccount: {
        position: 'absolute',
        backgroundColor: '#033EA8',
        width: 100,
        height: 41,
        left: 145,
        top: 660,
        borderRadius: 30,
        justifyContent: 'center',
      },
      buttonGo: {
        position: 'absolute',
        backgroundColor: '#033EA8',
        width: 78,
        height: 41,
        left: 261,
        top: 567,
        borderRadius: 30,
        justifyContent: 'center',
      },
      buttonText: {
        fontFamily: 'Arial Hebrew',
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
      },
      nameText: {
        position: 'absolute',
        width: 288,
        height: 41,
        top: 0,
        left: 51,
        borderRadius: 30,
        backgroundColor:'#FFFFFF',
        paddingLeft: 20,
      },
    emailText: {
        position: 'absolute',
        width: 288,
        height: 41,
        top: 50,
        left: 51,
        borderRadius: 30,
        backgroundColor:'#FFFFFF',
        paddingLeft: 20,
    },
    passwordText: {
        position: 'absolute',
        width: 288,
        height: 41,
        top: 100,
        left: 51,
        borderRadius: 30,
        backgroundColor:'#FFFFFF',
        paddingLeft: 20,
    },
    confirmPasswordText: {
        position: 'absolute',
        width: 288,
        height: 41,
        top: 150,
        left: 51,
        borderRadius: 30,
        backgroundColor:'#FFFFFF',
        paddingLeft: 20,
    }
})