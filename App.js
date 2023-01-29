import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './views/mainpage.js';
import FirstPage from './views/FirstPage.js';
import WhereToMain from './views/WhereToMain.js';
import WhereToUberMode from './views/WhereToUberMode.js';
import SettingsPage from './views/SettingsPage.js';
import AdjustBubble from './views/AdjustBubblePage.js';
import CreateAccountPage from './views/CreateAccountPage.js';
import RideHistoryPage from './views/RideHistoryPage.js';
import WhereTo1C from './views/WhereTo1C.js';
import WhereTo1D from './views/WhereTo1D.js';
import Whereto1F from './views/WhereTo1F.js';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options = {{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options = {{headerShown: false}}/>
        <Stack.Screen name="WhereToPage" component = {WhereToMain} options = {{headerShown: false}}/>
        <Stack.Screen name="UberPage" component = {WhereToUberMode} options = {{headerShown: false}}/>
        <Stack.Screen name="AdjustBubblePage" component = {AdjustBubble} options = {{headerShown: false}}/>
        <Stack.Screen name="CreateAccountPage" component = {CreateAccountPage} options = {{headerShown: false}}/>
        <Stack.Screen name="WhereTo1C" component = {WhereTo1C} options = {{headerShown: false}} />
        <Stack.Screen name="SettingsPage" component = {SettingsPage} options = {{headerShown: false}} />
        <Stack.Screen name="RideHistoryPage" component = {RideHistoryPage} options = {{headerShown: false}} />
        <Stack.Screen name="Whereto1F" component = {Whereto1F} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}