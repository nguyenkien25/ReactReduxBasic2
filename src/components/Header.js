import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { toggleIsAdding } from '../redux/actionCreators'
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text></Text>
                <Text>MY WORDS</Text>
                <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { toggleIsAdding })(Header);

const styles = StyleSheet.create({
    header: {
        flex: 1, 
        backgroundColor: '#D9D9D9', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    }
});