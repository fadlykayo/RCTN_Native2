import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  Content,
  Footer,
  Header,
} from '../../components';

import Styles from './style';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    people: []
  };
};

class Home extends Component {
  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      setTimeout(() => {
        this.setState({
          people: response.data.results,
        });
      }, 2000)
    })
  };

  renderCard() {
    return [{name: 'yoyoy'}].map((people, index) => {
      return (
        <Text
          key={ index }
          style={{fontSize: 30, height: 200}}
        >
          Welcome, {this.props.user.username} {people ? people.name : ''}
        </Text>
      )
    })
  };

  render() {
    console.log('inistate', this.state)
    return (
      <View style={Styles.container}>
        <Header/>
        <ScrollView style={{borderWidth: 1, padding: 20, backgroundColor: 'pink'}}>
          { this.renderCard() }
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

export default connect(mapStateToProps, null) (Home)
