import React from 'react';
import {Platform, Dimensions} from 'react-native';
import { createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import ProfileScreen from '../pages/ProfileScreen';
import ContactScreen from '../pages/ContactScreen';
import MenuDrawer from '../components/MenuDrawer';
import CameraScreen from '../pages/CameraScreen';
import LocationScreen from '../pages/LocationScreen';
import MapsScreen from '../pages/MapsScreen';
import InfoScreen from '../pages/InfoScreen';
import TodoScreen from '../pages/TodoScreen';


const WIDTH = Dimensions.get('window').Wwidth;

const   DrawerConfig = {
    DrawerWidth : WIDTH*0.83,
    contentComponent:({ navigation }) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const Tabs = createBottomTabNavigator({
    Profile : ProfileScreen,
    Info : InfoScreen,
    Contact : ContactScreen
}, {
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#ffff',
        },
        indicatorStyle: {
            backgroundColor: '#0000'
        }
    }
});


const DrawerNavigator = createDrawerNavigator(
    {
        Home : {
            screen : Tabs
        },
        Profile : {
            screen : ProfileScreen
        },
        Info : {
            screen : InfoScreen
        },
        Camera : {
            screen : CameraScreen
        },
        Location : {
            screen: LocationScreen
        },
        Maps : {
            screen : MapsScreen
        },
        Todo : {
            screen : TodoScreen
        }

    
    },
    DrawerConfig
    
);

export default createAppContainer(DrawerNavigator);