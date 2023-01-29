// this is the initial page when user enters Settings
import { StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';



export default AdjustBubble = ({ navigation }) => {
  return (
    <View style = {styles.mainContainer}>
        <Text style = {styles.titleText}>Adjust Bubbles</Text>
        <View style = {styles.containerOne}>
            <Text style = {styles.textLeft}>A</Text><Text style ={styles.textMiddle}>Home</Text><Text style = {styles.imageRight}>img</Text>
        </View>

        <View style = {styles.containerTwo}>
            <Text style = {styles.textLeft}>B</Text>
            <Text style ={styles.textMiddle}>UCSD</Text>
        </View>

        <View style = {styles.containerThree}>
            <Text style = {styles.textLeft}>C</Text>
            <Text style ={styles.textMiddle}>hMart</Text>
        </View>

        <View style = {styles.containerFour}>
            <Text style = {styles.textLeft}>D</Text>
            <Text style ={styles.textMiddle}>Harry's home</Text>
        </View>

        <View style = {styles.containerFive}>
            <Text style = {styles.textLeft}>E</Text>
            <Text style ={styles.textMiddle}>Hospital</Text>
        </View>

        <View style = {styles.containerSix}>
            <Text style = {styles.textLeft}>F</Text>
            <Text style ={styles.textMiddle}>Pacific Beach</Text>
        </View>
    </View>
  );
};



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    containerOne: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 158,
        borderRadius: 20,
        backgroundColor: 'rgba(245,184,26,0.3)',
        flexDirection: 'row',
    },
    containerTwo: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 255,
        borderRadius: 20,
        backgroundColor: 'rgba(135,148,182,0.5)',
        flexDirection: 'row',
    },
    containerThree: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 352,
        borderRadius: 20,
        backgroundColor: 'rgba(244,165,129,0.5)',
        flexDirection: 'row',
    },
    containerFour: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 449,
        borderRadius: 20,
        backgroundColor: 'rgba(140,183,168,0.5)',
        flexDirection: 'row',

    },
    containerFive: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 546,
        borderRadius: 20,
        backgroundColor: 'rgba(166,219,249,0.6)',
        flexDirection: 'row',
    },
    containerSix: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 643,
        borderRadius: 20,
        backgroundColor: 'rgba(251, 177, 234, 0.5)',
        flexDirection: 'row',
    },
    titleText: {
        position: 'absolute',
        fontFamily: 'Arial Hebrew',
        fontSize: 30,
        fontWeight: 'bold',
        left: 94,
        top: 69,
    },
    textLeft: {
        position: 'absolute',
        fontFamily: 'Arial Hebrew',
        fontSize: 30,
        left: 20,
        top: 27,
        fontWeight: 'bold',
    },
    textMiddle: {
        position: 'absolute',
        fontFamily: 'Arial Hebrew',
        fontSize: 25,
        left: 110,
        top: 27,
    },
    imageRight: {
        position: 'absolute',
        left: 280,
        top: 27,
    },
});

