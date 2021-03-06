import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import List from './src/components/List';
import Input from './src/components/Input';
import Detail from './src/components/Detail';

// import Image from './src/assets/scenery.jpeg';

import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index"; 
  
class App extends Component {

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
    console.log('Place Added')
  }
  
  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {   
    return (
      <View style={styles.container}>
        <Detail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler} 
        />
        <Input 
          onPlaceAdded={this.placeAddedHandler}
        />
        <List 
          places={this.props.places} 
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);