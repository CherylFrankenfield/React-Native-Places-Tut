import React, {Component} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
  <DefaultInput placeholder='Place Name'
    value={props.placeName}
    onChangeText={props.onChangeText}
  />
);

export default placeInput;
//gets turned into functional component.
  // state = {
  //   placeName: ''
  // };
  //
  // placeNameChangedHandler = val => {
  //   this.setState({
  //     placeName: val
  //   });
  // };

//Do not need after refactoring w/o button in return.
  // placeSubmitHandler = () => {
  //   if (this.state.placeName.trim() === '') {
  //     return;
  //   }
  //   this.props.onPlaceAdded(this.state.placeName);
  // };

    //not set state after but more elegant solution - check validity of name inside PlaceInput component b/c makes more sense logically.
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat(prevState.placeName)
    //   };
    // });



// <TextInput
// style={styles.placeInput}
// placeholder='Name an awesome place'
// value={this.state.placeName}
// onChangeText={this.placeNameChangedHandler}
// />
// <Button
// style={styles.placeButton}
// title='Add'
// onPress={this.placeSubmitHandler}
// />
