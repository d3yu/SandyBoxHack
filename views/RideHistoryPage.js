import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RightArrow} from './VectorIcon.js';
// this page's color is not fully covered
export default RideHistoryPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
           <View style = {styles.box1}>
                <Text style = {styles.text}>Notification</Text>
                <RightArrow />
            </View>
           <View style = {styles.box2}>
                <Text style = {styles.text}>Terms & conditions</Text>
                <RightArrow />
            </View>
           <View style = {styles.box3}>
                <Text style = {styles.text}>Privacy Policy</Text>
                <RightArrow />
            </View>
           <View style = {styles.box4}>
                <Text style = {styles.text}>Version</Text>
                <RightArrow />
            </View>
           <View style = {styles.box5}>
                <Text style = {styles.text}>Log Out</Text>
                <RightArrow />
            </View>
           <View style = {styles.box6}>
                <Text style = {styles.text}>Delete Account</Text>
                <RightArrow />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box1: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 130,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    box2: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 210,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    box3: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 290,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    box4: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 370,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,

    },
    box5: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 450,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,

    },
    box6: {
        position: 'absolute',
        width: 325,
        height: 50,
        left: 30,
        top: 530,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
        paddingBottom: 10,

    },
    text: {
        fontFamily: 'Arial Hebrew',
        fontSize: 20,
    },
});
