import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class SettingScreen extends React.Component {
  render() {
    return (
    
      <View style={styles.container}>
      <MenuButton navigation ={this.props.navigation}/>
      <Text style={styles.text1}>Anggota Kelompok :
        </Text>
        
        <Image source={require('../img/linda.jpg')} style={{width: '25%', height: '20%', marginTop: 20}}>   
        </Image>
        <Text style={styles.text}>Linda Ulfiaririfani
        </Text>
        <Image source={require('../img/dio.jpg')} style={{width: '25%', height: '20%'}}>   
        </Image>
        <Text style={styles.text}>Dio Hilmi Habibi
        </Text>
        <Image source={require('../img/pp.jpg')} style={{width: '25%', height: '20%'}}>   
        </Image>
        <Text style={styles.text}>Muhamad Zakaria Al Ansori
        </Text>
      </View>
    
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
  text:{
      fontSize:25,
  },
  text1:{
    fontSize:29,
    marginTop: 90,
}
});
