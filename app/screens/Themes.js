//Component will be used for the onPress handler
// that we can put directly on the component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
// Import Stylesheet to create local variables from our global variables
// so we can keep configuration out of our component
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create
(
    {
        $blue: '$primaryBlue',
        $green: '$primaryGreen',
        $orange: '$primaryOrange',
        $purple: '$primaryPurple',
    }
)

class Themes extends Component 
{
    static propTypes = 
    {
        navigation: PropTypes.object,
    }

    handleThemePress = (color) =>
    {
        console.log('press theme', color);
        // When a row is pressed in this screen, we will go back
        // to the previous screen
        this.props.navigation.goBack();
    }

    render ()
    {
        return (
            <ScrollView>
                <StatusBar 
                    translucent={false}
                    barStyle="default" 
                 />
                <ListItem 
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem 
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem 
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem 
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default Themes;