import React, { Component } from 'react';
import Days from '../monthView/Days';
import ListItem from '../monthView/listItem'
import Seperator from '../monthView/Seperator'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    FlatList,


} from 'react-native';

const temp_Time = '6am'

class Planner extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    };

    handlePress = () => {
        console.log(' press');
        var Daytext;
    };
    
    render() {


        return (

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headertxt}> March </Text>
                </View>


                <FlatList
                    data={Days}
                    renderItem={({ item }) =>
                        (<ListItem
                            text={item}
                            //onPress={item.Daytext}
                            data={item}
                            onPress={this.handlePress(item.Daytext)}
                            onPress={this.handlePress}

                        //selected={item === temp_Time}
                        />)
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Seperator}
                    numColumns={7}
                />



                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#006EC7',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderBottomWidth: 5,
        borderBottomColor: "#006EC7",
        elevation: 8,
    },
    headertxt: {
        color: 'white',
        fontSize: 36,
        padding: 10
    },
    scrollCont: {
        flex: 1,
        marginBottom: 100,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 45,
        backgroundColor: '#808284',
        width: 55,
        height: 55,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    addButtontxt: {
        color: 'white',
        fontSize: 55,
    },
});
export default Planner;

