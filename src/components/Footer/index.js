import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import Styles from './style';

export default class Footer extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Ini Footer Component</Text>
      </View>
    );
  }
}
