import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet, StatusBar, Image } from 'react-native'

export default class HomeScreen extends Component {

    constructor (props) {
        super(props)
        this.state = {
            setTable: ''
        }
    }

    handleSetTable = (text) => {
        this.setState({ setTable: text })
    }

    render() {
        
        const { setTable } = this.state

        return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#BF0D2F' barStyle="light-content" />
                <Image style={styles.logo} source={{uri : 'https://sgnd.github.io/projects/restobot/assets/logo.png'}}/>
                <Text style={styles.title}>Restobot</Text>
            <View>
                <TextInput style={styles.input} placeholder='masukkan nomor meja' placeholderTextColor='white' keyboardType={'numeric'} onChangeText={this.handleSetTable} />
                <TouchableHighlight style={styles.button} underlayColor={'#E0E0E0'} onPress={() => this.props.navigation.navigate('Menu', {setTable: setTable})}>
                    <Text style={styles.text}>Kirim</Text>
                </TouchableHighlight>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#BF0D2F'
    },
    input: {
        backgroundColor: '#BF0D2F', 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 3, 
        margin: 10,
        width: 300,
        color: 'white',
        textAlign: "center"
    },
    button: {
        marginBottom: 10,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: 'white', 
        borderRadius: 3,
        margin: 10,
        padding: 5
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        margin: 10,
        color: '#BF0D2F'
    },
    logo: {
        width: 75,
        height: 75
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginBottom: 35
    }
})