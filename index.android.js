/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,

} from 'react-native';

//引入本地文件
import Main from './app/main/CDMain'
export default class MyPro extends Component {
  render() {
    return (
        <Main />
    );
  }
}

AppRegistry.registerComponent('MyPro', () => MyPro);
