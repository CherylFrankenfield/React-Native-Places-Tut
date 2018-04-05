import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNsetOnNavigatorEvent);
  }

  setOnNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        })
      }
    }
  }
  
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  }

  render() {
    return(
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
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
