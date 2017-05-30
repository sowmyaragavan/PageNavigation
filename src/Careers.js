import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  StyleSheet,
  Image,View
} from 'react-native';
const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor :'#FFF',

	},
	
	instructions:{
		textAlign:'center',
		color:'#333333',
		marginBottom:5,
	},
	btnRegister:{
		margin:50,
		justifyContent:'center',

	},
	careers:{
		
		fontSize:20,
		paddingBottom:20,
		textAlign:'center',
		
		

	},
});
const Careers =(props) => {
	const { navigate } = props.navigation;
	return (
		<View style={styles.container}>
		<Text style={styles.careers}>
        NFN Labs Careers Portal
        </Text>

		<Button
		color="#841584"
		style={styles.btnRegister}
		onPress={() => navigate('Register')}
		title="Register"
		/>
		</View>
		);

}
Careers.navigationOptions = {
	title : 'Careers',
};
export default Careers