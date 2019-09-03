import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class BillScreen extends Component {
    render() {
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#BF0D2F' barStyle="light-content" />
            <View style={styles.head}>
                <View style={styles.table}>
                    <Text style={styles.text}></Text>
                </View>
                <View style={styles.center}>
                    <Image style={styles.logo} source={{uri : 'https://sgnd.github.io/projects/restobot/assets/logo.png'}} />
                    <Text style={styles.name}>Restobot</Text>
                </View>
                <View style={styles.timer}>
                    <Text style={styles.text}></Text>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={{fontSize: 15}}>Tanggal  : 17 Agustus 1945</Text>
                <Text style={{fontSize: 15}}>Jam         : 17.00</Text>
            </View>
            <View style={{borderWidth: 0.5, borderColor: '#BF0D2F', width: 335, marginBottom: 20}}></View>
            <View style={styles.content}>
                <View style={styles.status}>
                    <Text style={{fontSize: 18, marginBottom: 5, color: '#e74c3c'}}>PROSES</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: '#e74c3c'}}>PROSES</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: '#2ecc71'}}>KIRIM</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Teh Manis</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Mie Ayam</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Bakso</Text>
                </View>
                <View style={styles.price}>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 6.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 15.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 12.000</Text>
                </View>
            </View>
            <View style={{borderWidth: 0.5, borderColor: '#BF0D2F', width: 335, marginBottom: 20}}></View>
            <View style={styles.content}>
                <View style={styles.status}>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Sub Total</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Discount</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Service Charge</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Tax</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey', fontWeight: "bold"}}>TOTAL</Text>
                </View>
                <View style={styles.menu}>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 33.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 10.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 5.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey'}}>Rp. 1.000</Text>
                    <Text style={{fontSize: 18, marginBottom: 5, color: 'grey', fontWeight: "bold"}}>Rp. 29.000</Text>
                </View>
            </View>
            <View style={{borderWidth: 0.5, borderColor: '#BF0D2F', width: 335, marginBottom: 20}}></View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.goBack()}>
                    <Text style={{color: 'white'}}>NOTA</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    header: {
        flexDirection: "column",
        width: 325,
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    content: {
        flex: 6,
        width: 325,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    footer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    status: {
        flexDirection: "column"
    },
    menu: {
        flexDirection: "column"
    },
    price: {
        flexDirection: "column"
    },
    button: {
        padding: 10,
        backgroundColor: '#BF0D2F',
        marginBottom: 10,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        width: 335
    },
    touch: {
        padding: 10,
        color: '#BF0D2F',
        backgroundColor: 'white',
        borderRadius: 3,
        marginRight: 10,
        width: 106.5,
        textAlign: "center"
    },
    logo: {
        height: 30,
        width: 30,
        margin: 5
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#BF0D2F',
        height: 50
    },
    name: {
        color: 'white',
        fontSize: 18
    },
    text: {
        fontWeight: "bold",
        color: 'white'
    },
    timer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 10
    },
    table: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10
    },
    center: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})