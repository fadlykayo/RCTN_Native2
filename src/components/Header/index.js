import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import Styles from './style';

export default class Header extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Ini Header Component</Text>
      </View>
    );
  }
}
