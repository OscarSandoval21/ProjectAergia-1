import propTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


const ListItem = ({ text, onPress, selected, data, ...props }) => (
    <TouchableHighlight onPress={onPress} underlayColor={'#808284'}>
        <View style={styles.row}>
            <Text style={styles.text}> {text}  </Text>
            
            {selected ? <Text> Selected</Text> : null}
            
        </View>
        
    </TouchableHighlight>
);





ListItem.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    selected: propTypes.bool,
    data: propTypes.string,
};

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 12,
        //paddingVertical: 49,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'flex-start',
        backgroundColor: 'white',
        //flexWrap: 'wrap',
        //margin: 1,
        borderRightWidth: StyleSheet.hairlineWidth,
        width: 52,
        height: 123
    },
    text: {
        fontSize: 20,
        marginLeft: -13,
        //marginBottom: -100,

    },
    seperator: {
        
        flex: 1,
        height: StyleSheet.hairlineWidth,
        width: StyleSheet.hairlineWidth,
    },
});
export default ListItem;