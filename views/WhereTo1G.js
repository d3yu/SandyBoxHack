import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import {ThumbsUp, ThumbsDown} from './VectorIcon.js';

const pbvImg = require('../assets/pbvModel.png');
const mapImg = require('../assets/mapImg.png');

export default WhereTo1G = ({ navigation }) => {

    const [firstFive, setFirstFive] = useState(true);
    const [secondFive, setSecondFive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstFive(false);
            setSecondFive(true);
            // create a circle, you are here text, arrived address and position accordingly
            navigation.navigate("MainPage");
        }, 5000); 
    });
    
    return (
        <View style = {styles.container}>
            <Image source={mapImg} style = {styles.mapImg} />
            <Text style = {styles.textaddress}>UCSD-Gilman Dr. San Diego, CA 92122</Text>
            <Text style = {styles.text}>You are here! </Text>
            <View style = {styles.circleMain}>
                <Text style = {styles.textCircle}>Home</Text>
            </View>
            <View style = {styles.feedbackContainer}>
                <Text style={styles.textFeedback}>Feedback?</Text>
                <View style={styles.circleContainer1}>
                    <ThumbsUp />
                </View>
                <View style={styles.circleContainer2}>
                    <ThumbsDown />
                </View>
            </View>

            <Text style = {styles.bottomText}>You will be redirected to Main Page in 5 seconds...</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    mapImg: {
        position: 'absolute',
        width: 320,
        height: 200,
        left: 35,
        top: 50,
        
    },
    pbvImg: {
        position: 'absolute',
        width: 227,
        height: 125,
        left: 72,
        top: 440,
    },
    text: {
        postion: 'absolute',
        fontFamily: 'Arial Hebrew',
        textAlign: 'center',
        fontSize: 17,
        top: 288,
    },
    feedbackContainer: {
        position: 'absolute',
        width: 347,
        height: 230,
        left: 21,
        top: 522,
        backgroundColor: 'rgba(125,211,159,0.3)',
        borderRadius: 30,
        alignItems: 'center',
        
    },
    textFeedback: {
        paddingTop: 20,
        fontSize: 17,
        fontFamily: 'Arial Hebrew',
        fontWeight: 'bold',
    },
    circleContainer1: {
        position: 'absolute',
        width: 129,
        height: 129,
        borderRadius: 129 / 2,
        left: 30,
        top: 70,
        backgroundColor: 'white',
        

    },
    circleContainer2: {
        position: 'absolute',
        width: 129,
        height: 129,
        borderRadius: 129 / 2,
        left: 190,
        top: 70,
        backgroundColor: 'white',
    },
    circleMain: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        left: 145,
        top: 335,
        backgroundColor: 'rgba(245, 184, 26, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textCircle: {
        fontSize: 17,
        fontFamily: 'Arial Hebrew',
        fontWeight: 'bold',
    },
    textaddress: {
        position: 'absolute',
        fontSize: 17,

        fontFamily: 'Arial Hebrew',
        height: 44,
        top: 457,
    },
    bottomText: {
        fontSize: 13,

        fontFamily: 'Arial Hebrew',
        top: 757,
    }

});