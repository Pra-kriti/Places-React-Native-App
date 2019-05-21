import React, { Component } from 'react';
import ListItem from './ListItem';

import { StyleSheet, FlatList } from 'react-native';

class List extends Component {    
    render() {
        
        return(  
            <FlatList 
                style={styles.listContainer}
                data={this.props.places}
                renderItem={(info) => (
                    <ListItem 
                        placeName={info.item.name} 
                        placeImage={info.item.image}
                        onItemPressed={() => this.props.onItemSelected(info.item.key.toString())} 
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})

export default List;