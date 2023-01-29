import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const pbvImg = require('../assets/pbvModel.png');

export default WhereTo1C = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            // after 5 seconds, change the position of mapBox Image and Text text2, 
            // remove text2 
            // Create mapImg bottom
            // create two texts

            navigation.navigate("Whereto1F");
        }, 2000); 
    }, []);
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.text1}>We've matched you a car!</Text>
            <Text style = {styles.text2}>10HWDG80</Text>
            <Image style = {styles.pbvImgstyle} source = {pbvImg}/>
            <View style = {styles.secondContainer}>
                <Text style ={styles.textcontainer1}>The car has features like...</Text>
                <Text style ={styles.textcontainer2}> - a ramp</Text>
                <Text style ={styles.textcontainer3}> - 4 wheelchair docking seats</Text>
                <Text style ={styles.textcontainer4}> Estimated time of arrival... </Text>
            </View>
            
            
            
            <View style = {styles.cancelButton}>
                <Text>Cancel?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    circle: {
        backgroundColor: 'rgba(245, 184, 26, 0.6)',
        position: 'absolute',
        width: 240,
        height: 240,
        borderRadius: 240 / 2,
        left: 71,
        top: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontFamily: 'Arial Hebrew',
        fontSize: 35,
        fontWeight: 'bold',
    },
    pbvImgstyle: {
        position: 'absolute',
        width: 320,
        height: 177,
        left: 35,
        top: 159,
    },
    cancelButton: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 16,
        top: 686,
        backgroundColor: 'rgba(120, 101, 76, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    textOne: {
        fontFamily: 'Arial Hebrew',
        position: 'absolute',
        height: 35,
        width: 350,
        left: 27,
        top: 316,
        textAlign: 'center',
    },
    textSec: {
        fontFamily: 'Arial Hebrew',
        position: 'absolute',
        height: 30,
        width: 312,
        left: 34,
        top: 637,
        textAlign: 'center',
    },
    text1: {
        position: 'absolute',
        width: 320,
        height: 67,
        left: 35,
        top: 46,
        fontFamily: 'Arial Hebrew',
        textAlign: 'center',
        fontSize: 20,
    },
    text2: {
        position: 'absolute',
        width: 320,
        height: 67,
        left: 35,
        top: 76,
        fontFamily: 'Arial Hebrew',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    secondContainer: {
        position: 'absolute',
        width: 347,
        height: 270,
        left: 22,
        top: 361,
        backgroundColor: 'rgba(125,211,159,0.3)',
        borderRadius: 30,
        justifyContent: 'space-evenly',
        paddingLeft: 30,
        // alignItems: 'center',
    },
    textcontainer1: {
        fontFamily: 'Arial Hebrew',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textcontainer2: {
        textAlign: 'left',
    },
    // textcontainer3: {

    // },
    // textcontainer4: {

    // },

});