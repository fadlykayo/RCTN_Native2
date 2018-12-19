import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Content,
  Footer,
  Header,
} from '../../components';
import {
  userActions,
} from '../../actions';

import Styles from './style';

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    login: (state) => dispatch(userActions.login(state))
  }
}

class Login extends Component {
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
    this.props.login(this.state.username);

    if (this.state.username !== '') {
      Actions.home();
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <Header/>

        <Content>
          <TextInput
            style={ Styles.textInput }
            onChangeText={ (text) => this.handleOnChangeText(text, 'username') }
            placeholder={'username'}
          />

          <TextInput
            style={ Styles.textInput }
            onChangeText={ (text) => this.handleOnChangeText(text, 'password') }
            placeholder={'password'}
            secureTextEntry
          />

          <TouchableOpacity
            style={ Styles.button }
            onPress={ () => this.handleOnPress() }
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </Content>

        <Footer/>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps) (Login)
