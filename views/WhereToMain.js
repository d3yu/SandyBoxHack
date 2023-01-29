// this is the initial page when user enters where to?
import { StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default WhereToMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}>
          <Text style = {styles.text1} onPress={() => {navigation.navigate('UberPage')}}>Home</Text>
      </View>
      <View style={styles.circle2}>
        <Text style = {styles.text2} onPress={() => {navigation.navigate('UberPage')}}>Hospital</Text>
      </View>
      <View style={styles.circle3}>
        <Text style = {styles.text3} onPress={() => {navigation.navigate('UberPage')}}>hMart</Text>
      </View>
      <View style={styles.circle4}>
        <Text style = {styles.text4} onPress={() => {navigation.navigate('UberPage')}}>UCSD</Text>
      </View>
      <View style={styles.circle5}>
        <Text style = {styles.text5} onPress={() => {navigation.navigate('UberPage')}}>Harry's Home</Text>
      </View>
      <View style={styles.circle6}>
        <Text style = {styles.text6} onPress={() => {navigation.navigate('UberPage')}}>Pacific Beach</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  circle1: {
    width: 240,
    height: 240,
    backgroundColor: 'rgba(245, 184, 26, 0.6)',
    borderRadius: 240 / 2,
    position: 'absolute',
    left: 19,
    top: 53,
    alignItems:'center',
    justifyContent: 'center',
  },
  circle2: {
    backgroundColor: 'rgba(106, 195, 244, 0.6)',
    position: 'absolute',
    width: 120,
    height: 120,
    left: 239,
    top: 233,
    borderRadius: 120 / 2,
    alignItems:'center',
    justifyContent: 'center',
  },
  circle3: {
    backgroundColor: 'rgba(236, 105, 45, 0.6)',
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    left: 18,
    top: 304,
    alignItems:'center',
    justifyContent: 'center',
  },
  circle4: {
    backgroundColor: 'rgba(55, 77, 133, 0.6)',
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 240 / 2,
    left: 139,
    top: 390,
    alignItems:'center',
    justifyContent: 'center',
  },
  circle5: {
    backgroundColor: 'rgba(64, 135, 110, 0.6)',
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 150 / 2,
    left: 37,
    top: 603,
    alignItems:'center',
    justifyContent: 'center',
  },
  circle6: {
    backgroundColor: 'rgba(248, 125, 221, 0.6)',
    width:120,
    height:120,
    position: 'absolute',
    borderRadius: 120 /2,
    left: 211,
    top: 677,
    alignItems:'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'Arial Hebrew',
    fontSize: 30,
  },
  text2: {
    fontFamily: 'Arial Hebrew',
    fontSize: 14,
  },
  text3: {
    fontFamily: 'Arial Hebrew',
    fontSize: 21,
  },
  text4: {
    fontFamily: 'Arial Hebrew',
    fontSize: 28,
  },
  text5: {
    fontFamily: 'Arial Hebrew',
    fontSize: 21,
  },
  text6: {
    fontFamily: 'Arial Hebrew',
    fontSize: 14,
  },
  

});

