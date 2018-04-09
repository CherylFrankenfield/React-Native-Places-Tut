import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import backgroundImage from '../../assets/background.jpg';

class PickImage extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={backgroundImage} style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <Button title='Pick Image' onPress={() => alert('heyo')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: '100%',
    height: '100%'
  }
});

export default PickImage;
