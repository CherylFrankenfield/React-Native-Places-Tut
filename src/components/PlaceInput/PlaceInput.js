import React, {Component} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    //not set state after but more elegant solution - check validity of name inside PlaceInput component b/c makes more sense logically.
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat(prevState.placeName)
    //   };
    // });
  };


  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder='Name an awesome place'
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          title='Add'
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
