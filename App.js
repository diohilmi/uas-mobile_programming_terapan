import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import AuthLoadingScreen from "./pages/AuthLoadingScreen";
import SignInScreen from "./pages/LoginPage";
import DrawerNavigator from "./navigations/DrawerNavigation";

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createSwitchNavigator({DrawerNavigator});
const AuthStack = createStackNavigator({ SignIn: SignInScreen }, { headerMode: 'none' });

const AppContaner =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyB5MlDhfvSIy_gpz-i-FXNDOPICoeGpLKo",
        authDomain: "consolecb1.firebaseapp.com",
        databaseURL: "https://consolecb1.firebaseio.com",
        projectId: "consolecb1",
        storageBucket: "consolecb1.appspot.com",
        messagingSenderId: "413566993652",
        appId: "1:413566993652:web:db713e9adb46f9d9"

      });
  }
  
  render() {
    return (
      <AppContaner />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
