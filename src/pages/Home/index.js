import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Content,
  Footer,
  Header,
} from '../../components';

import Styles from './style';

export default class Home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Header/>
        <Content data={'PP'}/>
        <Footer/>
      </View>
    );
  }
}
