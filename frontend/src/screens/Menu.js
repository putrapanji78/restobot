import React, { Component } from 'react'
import { Alert, View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image } from 'react-native'

import axios from 'axios'
import { connect } from 'react-redux'

import { getMenus } from '../_actions/menus'
import { getCategories } from '../_actions/categories'

class MenuScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            menus : [],
            categories : [],
            timer: 0,
        }
    }

    componentDidMount(){
        this.interval = setInterval(
            () => this.setState((prevState)=> ({ timer: prevState.timer + 1 })),
            1000
        )

        axios.get(`http://192.168.1.116:3000/api/v1/menus`)
        .then(res =>{
            const menus = res.data
            this.props.dispatch(getMenus(menus))
        })

        axios.get(`http://192.168.1.116:3000/api/v1/categories`)
        .then(res =>{
            const categories = res.data
            this.props.dispatch(getCategories(categories))
        })
    }

    confirm(){
        Alert.alert(
            'Konfirmasi Pesanan',
            'Anda yakin ingin memesan ini?',
            [
                {text: 'Tidak', onPress: () => console.warn('Tidak Memproses Pesanan!'), style: 'cancel'},
                {text: 'Ya', onPress: () => console.warn('Memproses Pesanan!')},
            ]
        )
    }

    render() {
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#BF0D2F' barStyle="light-content" />
            <View style={styles.head}>
                <View style={styles.table}>
                    <Text style={styles.text}>Meja: {this.props.navigation.state.params.setTable}</Text>
                </View>
                <View style={styles.center}>
                    <Image style={styles.logo} source={{uri : 'https://sgnd.github.io/projects/restobot/assets/logo.png'}} />
                    <Text style={styles.name}>Restobot</Text>
                </View>
                <View style={styles.timer}>
                    <Text style={styles.text}>Detik: {this.state.timer}</Text>
                </View>
            </View>
                <View style={styles.navigation}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {this.props.categories.data.map(item => (
                            <View key={item.id}>
                                <TouchableOpacity>
                                    <Text style={styles.navitem}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                    ))}
                    </ScrollView>
                </View>
                <ScrollView>
                    <View>
                        <ScrollView contentContainerStyle={styles.contentContainer}>
                        {this.props.menus.data.map(item => (
                            <View key={item.id}>
                                <TouchableOpacity onPress={()=> alert(item.name + ' | Rp ' + item.price)}>
                                    <Image style={styles.cover} source={{uri : item.image}}/>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.price}>Rp. {item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                        </ScrollView>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.order}></View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={()=> this.confirm()}>
                            <Text style={styles.touch}>Konfirmasi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.touch}>Telfon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Bill')}>
                            <Text style={styles.touch}>Nota</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus,
        categories: state.categories
    }
}
  
export default connect(mapStateToProps)(MenuScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigation: {
        flexDirection: "row",
        backgroundColor: '#BF0D2F'
    },
    navitem: {
        padding: 10,
        color: '#BF0D2F',
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 10,
        marginLeft: 10
    },
    contentContainer: {
        padding: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        flexDirection: "row",
        width: 325,
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10
    },
    cover: {
        width: 108,
        height: 110,
        borderRadius: 3,
        marginBottom: 5
    },
    title: {
        marginBottom: 1,
        color: '#BF0D2F',
        fontSize: 15
    },
    price: {
        marginBottom: 15,
        color: '#718093',
        fontSize: 12
    },
    footer: {
        flexDirection: "column",
        padding: 10,
        backgroundColor: '#BF0D2F'
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    order: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        height: 50,
        borderRadius: 3
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