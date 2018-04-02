import React from 'react';
import {View,Image,Text,Button,StyleSheet,TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  return(
    <View style={styles.modalContainer}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}
            <Icon size={30} name='ios-trash' color='red'/>
          </View>
        </TouchableOpacity>
        <Button title='Close' onPress={props.onModalClosed}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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

export default placeDetail;

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
