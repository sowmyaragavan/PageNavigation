import React from 'react';
import {
  AppRegistry,
  Text,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  Image,View
} from 'react-native';
const onRegisterPress = () => {
  Alert.alert('Account Has been Created!');
};
const styles = StyleSheet.create({
 wrapper : {
   backgroundColor :'#FFF' ,
   flex : 1 ,
   paddingTop:120, 
  
 },
  tInRegister: {
   fontSize: 16,
   height: 40,
   color:'#800080'
  },
    textStyle:{
    fontSize: 16,
    color:'#800080'
    },
   Signupform : {
     width:400,
     height:100,
     justifyContent:'center',
     marginTop:20,
     marginLeft : 10,
     marginRight :10 
    
    },


});
const Register = () => {
	return (
       <View style ={styles.wrapper}>
       <View style={styles.Signupform}>
       <Text style={styles.textStyle}> First name </Text>
       <TextInput
       style={styles.tInRegister}
       />
       <Text style={styles.textStyle}> Last name </Text> 
       <TextInput
        style={styles.tInRegister}
       />
        <Text style={styles.textStyle}> Email </Text>
        <TextInput
        style={styles.tInRegister}
        />
        <Text style={styles.textStyle}> Mobile </Text>
        <TextInput
         style={styles.tInRegister}
        />
         <Button 
          style={styles.btnRegister}
          onPress={onRegisterPress}
          title="Register"
          color="#841584"
         />
         </View>
         </View>
    );
}
Register.navigationOptions = {
title :'Register'
};
export default Register