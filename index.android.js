/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


import Careers from './src/Careers'
import { StackNavigator } from 'react-navigation'
import Register from './src/Register'

export default class PageNavigation extends Component {
 render()
    {
      const { navigation } =this.props;
      
      return (
        <Careers navigation={ navigation }/>

       

      );
    }
}

const NavigationApp =StackNavigator({
  Careers :{ screen: Careers},
  Register:{screen: Register}
});

AppRegistry.registerComponent('PageNavigation', () => NavigationApp);


