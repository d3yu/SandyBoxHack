import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const mapImg = require('../assets/mapImg.png');

export default WhereToUberMode = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("WhereTo1C");
        }, 5000); 
    });
    // after 5 seconds, navigate to next page
    return (
        <View style = {styles.container}>
            <View style={styles.circle}>
                <Text style = {styles.textTitle}>Places</Text>
            </View>
            <Text style = {styles.textOne}>We are matching you a nearby PBV made by SandyBox</Text>
            
            <Image style = {styles.mapBox} source = {mapImg}/>
            <Text style = {styles.textSec}>Estimated maximum time to match: 5 min..</Text>
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
    mapBox: {
        position: 'absolute',
        width: 320,
        height: 240,
        left: 27,
        top: 362,
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
});