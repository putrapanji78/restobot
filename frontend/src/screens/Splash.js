import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native'

const timers = 1000

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, timers)
    }

    render() {
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#BF0D2F' barStyle="light-content" />
            <Image style={styles.logo} source={{uri : 'https://sgnd.github.io/projects/restobot/assets/logo.png'}}/>
            <View>
                <Text style={styles.title}>Restobot</Text>
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
    logo: {
        width: 150,
        height: 150
    },
    title: {
        fontSize: 35,
        color: 'white'
    }
})