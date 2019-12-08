import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text, TextInput, View,
  Image, ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import DatePicker from 'react-native-datepicker'

import { Button } from "../components";

import styles from "../styles";
import palette from "../palette";

export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      email: '',
      emailSent: false,
      keyboardVisible: false,
    };
  }

  render() {
    return (
      <>
        <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image source={require('../assets/helper_logo.png')} style={{height: '100%', width: '100%'}} resizeMode="center"/>
          </View>
          <View style={{flex: 2}}>
            <View style={{flex: 1, marginBottom: 0, alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                style={styles.textInput}
                keyboardType="email-address"
                placeholder={'Adres e-mail'}
                placeholderTextColor={palette.blue}
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              { this.state.emailSent &&
                <View style={{
                  width: '65%',
                  height: '15%',
                  marginTop: 20,
                  padding: 20,
                  backgroundColor: palette.darkgrey,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  borderBottomRightRadius: 0,
                }}
                >
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Na podany adres e-mail
                    zostało wysłane nowe hasło
                  </Text>
                </View>
              }
            </View>

            <Button
              onPress={() => { this.state.emailSent ? this.props.navigation.navigate('Login') : this.setState({emailSent: true})}}
              text={'Przypomnij hasło'}
              textStyle={{color: '#fff'}}
              style={[styles.blueButton, {width: '100%', height: 54}]}>
            </Button>
          </View>
        </ImageBackground>
      </>
    );
  }
}
