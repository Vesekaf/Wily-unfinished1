import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SearchScreen from './screens/SearchScreen'; 
import Transaction from './screens/Transaction'; 


export default class App extends React.Component{

  render(){

    return(
      <View>
        <AppContainer />
      </View>
    );


  }

}


const tabNavigator = createBottomTabNavigator({

    Transaction: Transaction, 
    SearchScreen: SearchScreen

  },

  {

    defaultNavigationOptions: ({navigation}) => ({

      tabBarIcon: ({}) => {

        const rootName = navigation.state.rootName
        if(rootName === "Transaction" ){

          return (<Image source= {require('./assets/book.png')} styles = {{width: 40, height: 40}} />)

        }
        else if(rootName === "Search" ){

          return (<Image source = {require('./assets/searchingbook.png')} styles = {{width: 40, height: 40}} />)

        }

      }

  })
  

})

const AppContainer = createAppContainer(tabNavigator);
