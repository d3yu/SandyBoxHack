import {View, Button, StyleSheet, TouchableOpacity, Text, Image, Touchable} from 'react-native';
import Svg, {Path} from 'react-native-svg';


TouchableOpacity.defaultProps = {activeOpacity: 0.8};

export const AppButton = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress = {onPress}
                style = {styles.appButtonContainer}
            >
                <ButtonImg />
            </TouchableOpacity>
        </View>
    );
}

const ButtonImg = () => {
    return (
        <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.66477 12.33L10.7663 16.0077C11.0432 16.4922 11.1816 16.7344 11.1816 17C11.1816 17.2655 11.0432 17.5078 10.7663 17.9923L8.66477 21.67C7.42646 23.837 6.80731 24.9205 7.29014 25.4578C7.77296 25.9951 8.91627 25.4949 11.2029 24.4945L24.1452 18.8323C25.9407 18.0468 26.8384 17.654 26.8384 17C26.8384 16.346 25.9407 15.9532 24.1452 15.1677L11.2029 9.50542C8.91627 8.50502 7.77296 8.00482 7.29014 8.54214C6.80731 9.07946 7.42646 10.163 8.66477 12.33Z" stroke="white"/>
        </Svg>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    img: {
        width: 34,
        height: 34,
        resizeMode: 'cover',
        position: 'absolute',
        left: 291,
        top: 446,
    }
})