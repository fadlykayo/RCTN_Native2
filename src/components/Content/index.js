import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import Styles from './style';

class Content extends Component {
  render() {
    return (
      <View style={Styles.container}>
        {this.props.children}
      </View>
    );
  }
}

export default Content;
