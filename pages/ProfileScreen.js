import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image, ImageBackground } from 'react-native';
import MenuButton from '../components/MenuButton';
import firebase from "firebase";
import{ImagePicker,Permissions} from 'expo';

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state={
        image:'https://facebook.github.io/react/logo-og.png',
        hasCameraPermission:null,
        hasCameraRollPermission:null,
    }
}


async componentWillMount(){
const {status} = await Permissions.askAsync(Permissions.CAMERA);
this.setState({hasCameraPermission:status === 'granted'});

const {statusCameraRoll} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
this.setState({hasCameraRollPermission:statusCameraRoll === 'granted'});
}

navLink(nav,text){
    return(
        <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

_pickImage = async ()=>{
    // let result = await ImagePicker.launchImageLibraryAsync({
        let result = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        aspect:[1, 1],
    });
    if (!result.cancelled){
        this.setState({ image:result.uri});
    }

};

  render() {
    const resizeMode = 'center';
    return (
  
      <View style={styles.container}>
      <View style={styles.topLinks}>
             <View style={styles.profile}>
            <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
            <Image style={styles.img}source={{uri:this.state.image}}/>
            </TouchableOpacity>


            
            
             <View style={styles.profileText}>
             <Text style={styles.name}>klik Gambar untuk mengambil gambar</Text>
             </View>
             </View>
             </View>
      <MenuButton navigation ={this.props.navigation}/>
        <Text style={styles.text}>“AWESOME”
        </Text>
        <View style={styles.button}>
        <Button title="log out" onPress={this._signoutAsyn}/>
        </View>
      </View>
      
     
    );
  }


_signoutAsyn =()=>{
  firebase.auth().signOut().then(function (){
    this.props.navigation.navigate('auth');
}).catch(function (error){
    console.log(error)
  });
  
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:170,
    width:170,
    borderRadius:100,
    justifyContent: 'center',
    marginTop : 100

},
profileText:{
  flexDirection:'column',
  justifyContent: 'center',
},
  text:{
      fontSize:30,
      justifyContent: 'center'
  },
  imgView:{
    paddingLeft:20,
    paddingBottom: 20,

},
button: {
  width: '90%',
  marginBottom: 10,
  marginTop: 350,
  
},
bg: {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover'
}
  
});
