import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// this page's color is not fully covered
export default MainPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.container_top}>
                
                <Text style = {styles.textOne} onPress={()=>{navigation.navigate('WhereToPage')}}>Where To?</Text>
                
            </View>
            <View style = {styles.container_bottom}>
                <Text style = {styles.textSec} onPress= {()=>{navigation.navigate('SettingsPage')}}>Settings</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding: 5,
    },
    container_top: {
        flex:1,
        backgroundColor: 'rgba(125, 211, 159, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_bottom: {
        flex:1,
        backgroundColor: 'rgba(194, 158, 239, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textOne: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textSec: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
