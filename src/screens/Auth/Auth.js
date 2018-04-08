import React, {Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return(
      <View>
      <Text>Please Log In</Text>
        <Button title='Swith to Log In' />
        <Button title='Submit' onPress={this.loginHandler}/>
        <TextInput placeholder='Your Email Address'/>
        <TextInput placeholder='User Password'/>
        <TextInput placeholder='Confirm Password'/>
      </View>
    );
  }
}

export default AuthScreen;
