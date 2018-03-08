import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
            />
        </View>
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
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  }
});
