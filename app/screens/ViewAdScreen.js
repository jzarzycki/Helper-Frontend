import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  ImageBackground,
} from 'react-native';
import {connect} from "react-redux";

import { Button, BurgerMenu } from "../components";

import styles from "../styles";
import palette from "../palette";
import IP from "../ip";

class AddAdsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      user: {},
      data: {
        title: 'Pęknięta rura pod umywalką',
        description: 'Mam problem z pękniętą rurą pod\bumywalką nie wiem co robić,\bpomocy!!!!',
        price: '20',
        category: 'Administracja',
        phoneNumber: '0700-504-807',
        address: 'ul. Leśna, 80-333 Gdańsk',
      },
    };
  };

  render() {
    var id = JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'));
    return (
      <>
      <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
        <View style={{flex: 1, marginTop: 15}}>
          <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.greyText}>Tytuł</Text>
            <Text style={[styles.text, {height: '15%',marginBottom: '3%'}]}>{this.state.data.title}</Text>

            <Text style={styles.greyText}>Opis</Text>
            <Text
              multiline
              style={[styles.text, {height: null, color: palette.blue, marginTop: '1%', marginBottom: '1%'}]}
              autoCapitalize="sentences"
            >{this.state.data.description}</Text>
          </View>
          <View style={{flex: 3, alignItems: 'center'}}>

            <Text style={[styles.greyText, {marginTop: '10%'}]}>Kwota</Text>
            <Text
              style={styles.text}
              autoCapitalize="sentences"
            >{this.state.data.price}</Text>

            <Text style={styles.greyText}>Kategoria</Text>
            <Text
            style={styles.text}
              autoCapitalize="words"
            >{this.state.data.category}</Text>

            <Text style={styles.greyText}>Numer kontaktowy</Text>
            <Text
            style={styles.text}
              autoCapitalize="sentences"
            >{this.state.data.phoneNumber}</Text>

            <Text style={styles.greyText}>Adres</Text>
            <Text
            style={styles.text}
              autoCapitalize="sentences"
            >{this.state.data.address}</Text>
          </View>
        </View>
        <BurgerMenu navigation={this.props.navigation}/>
        </ImageBackground>
      </>
    ); // this.toggleBurgerMenu()
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    showBurger: state.showBurger,
  }
}
export default connect(mapStateToProps)(AddAdsScreen);
