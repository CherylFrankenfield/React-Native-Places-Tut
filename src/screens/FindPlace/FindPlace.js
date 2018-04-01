import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  render() {
    return(
      <View>
        <PlaceList places={this.props.places}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
    //first places after state is from the rootReducer in configureStore.js
    //second places is inside the placesReducer, and reaches out to places array
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
