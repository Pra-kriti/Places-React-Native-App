import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class Input extends Component{
    state = {
        placeName: ''
    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awesome place"
                    value={this.props.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    placeInput: {
        width: "70%",
        borderBottomWidth: 2,
        borderColor: 'green'
    },
    placeButton: {
        width: "30%"
    },
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
})

export default Input;