import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
// import getTemp from '../api/getTemp';
import { startFetchData, fetchSuccess, fetchError, fetchDateThunk } from '../redux/actionCreators'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWheatherMessage(){
        const { cityName, temp, isLoading, error } = this.props;
        if (isLoading) return '...Đang tải';
        if (error) return 'Vui lòng thử lại';
        if (!cityName) return 'Nhập tên thành phố của bạn';
        return `${cityName} hiện tại là ${temp} độ C`;
    }

    getTempByCityName(){
        const { cityName } = this.state;
        // this.props.startFetchData();
        // getTemp(this.state.cityName)
        // .then(temp => {
        //     console.log(temp);
        //     this.props.fetchSuccess(cityName, temp);
        // })
        // .catch(err => {
        //     console.log(err);
        //     this.props.fetchError();
        // });
        this.props.fetchDateThunk(cityName);
    }

    render() {
        console.log('Ahihi');
        return(
            <View style={styles.container}>
                <Text style={styles.message}>{this.getWheatherMessage()}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({cityName: text})}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.getTempByCityName.bind(this)}
                >
                    <Text style={styles.buttonText}>Lấy Nhiệt Độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return { 
        cityName: state.cityName,
        temp: state.temp,
        isLoading: state.isLoading,
        error: state.error
    };
}

export default connect(mapStateToProps, { 
    startFetchData, fetchSuccess, fetchError, fetchDateThunk 
})(Main);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue', 
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    message: {
        color: 'white',
        fontSize: 30
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText:{
        color: 'white'
    },
    textInput:{
        margin: 10,
        height: 40,
        width: 400,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        color: 'white'
    },
});