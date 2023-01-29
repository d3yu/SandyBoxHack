import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import {ThumbsUp} from './VectorIcon.js';

const pbvImg = require('../assets/pbvModel.png');
const mapImg = require('../assets/mapImg.png');

export default WhereTo1F = ({ navigation }) => {

    const [firstFive, setFirstFive] = useState(true);
    const [secondFive, setSecondFive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstFive(false);
            setSecondFive(true);
            // create a circle, you are here text, arrived address and position accordingly
            // navigation.navigate("");
        }, 5000); 
    });
    
    return (
        <View style = {styles.container}>
            <Image source = {pbvImg} style = {styles.pbvImg}/>
            <Text style = {styles.text}>Estimated time of arrival: 8 min</Text>
            <Image source = {mapImg} style={styles.mapImg}/>
            <View style = {styles.feedbackContainer}>
                <Text style={styles.textFeedback}>Feedback?</Text>
                <View style={styles.circleContainer1}>
                    <ThumbsUp style = {styles.thumbUp}/>
                </View>
                <View style={styles.circleContainer2}></View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
    },
    mapImg: {
        position: 'absolute',
        width: 320,
        height: 240,
        left: 35,
        top: 119,
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
        left: 0,
        top: 400,
    },
    feedbackContainer: {
        position: 'absolute',
        width: 347,
        height: 230,
        left: 21,
        top: 582,
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
    }

});