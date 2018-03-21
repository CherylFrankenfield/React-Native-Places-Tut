import React from 'react';
import { StyleSheet,View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import placeImage from './src/assets/tagaytay.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {connect} from 'react-redux';
import {addPlace,deletePlace,selectPlace,deselectPlace} from './src/store/actions/index';

class App extends React.Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       image: {
    //         uri: 'https://images.pexels.com/photos/15382/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    //       }
    //     })
    //   };
    // });
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
    // this.setState({
    //    selectedPlace: null
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList
          places={this.props.places} onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
