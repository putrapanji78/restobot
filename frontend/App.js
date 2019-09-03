import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import store from './src/_redux/store'

import SplashScreen from './src/screens/Splash'
import HomeScreen from './src/screens/Home'
import MenuScreen from './src/screens/Menu'
import BillScreen from './src/screens/Bill'

const AppNavigator = createAppContainer(
  createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      header: null
    }
  },
  Bill: {
    screen: BillScreen,
    navigationOptions: {
      header: null
    }
  }
})
)

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
