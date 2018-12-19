import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';

import {
  Ratio
} from '../../helpers';

import Styles from './style';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  };

  // handleOnChangeText = (text) => (state) => {
  //   this.setState({
  //     [state]: text
  //   })
  // };
  //

  handleOnChangeText (text, state) {
    // this.state.username === this.state['username']

    this.setState({
      [state]: text
    });
  };

  handleOnPress() {
    console.log(this.state);
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={ Styles.textInput }
          onChangeText={ (text) => this.handleOnChangeText(text, 'username') }
        />
        <TextInput
          style={ Styles.textInput }
          onChangeText={ (text) => this.handleOnChangeText(text, 'password') }
          secureTextEntry
        />
        <Button
          style={ Styles.button }
          onPress={ () => this.handleOnPress() }
          title="Login"
          color="#841584"
        >
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}
// value={this.state.text}
