import React, {Component} from 'react';
import {View,Image,Text,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red'/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 300
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);

// <TouchableOpacity>
//   <Icon size={30} name='ios-trash' color='red'/>
// </TouchableOpacity>

//Code With Modal before refactor to Push pages / Navigation
// const placeDetail = props => {
//   let modalContent = null;
//
//   if (props.selectedPlace) {
//     modalContent = (
//       <View>
//         <Image source={props.selectedPlace.image} style={styles.placeImage}/>
//         <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
//       </View>
//     );
//   }
//   return(
//     <Modal
//       onrequestClose={props.onModalClosed}
//       visible={props.selectedPlace !== null}
//       animationType='slide'
//     >
//       <View style={styles.modalContainer}>
//         {modalContent}
//         <View>
//           <Button title='Delete' color='red' onPress={props.onItemDeleted}/>
//           <Button title='Close' onPress={props.onModalClosed}/>
//         </View>
//       </View>
//     </Modal>
//   );
// };
