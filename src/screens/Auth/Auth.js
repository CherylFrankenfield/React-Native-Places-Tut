import React, {Component} from 'react';
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title='Swith to Log In' />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder='Your Email Address'/>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder='User Password'/>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder='Confirm Password'/>
        </View>
        <Button title='Submit' onPress={this.loginHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8
  }
});

export default AuthScreen;
