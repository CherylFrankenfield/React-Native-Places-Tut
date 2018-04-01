import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {connect} from 'react-redux';

class SharePlaceScreen extends Component {
  render() {
    return(
      <View>
        <PlaceInput onPlaceAdded={} />
      </View>
    );
  }
}

export default connect()(SharePlaceScreen);
