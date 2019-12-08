import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  StatusBar,
  Keyboard
} from 'react-native';

import { Button } from "../components";

import styles from "../styles";
import palette from "../palette";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      keyboardVisible: false,
    };
  }

  componentWillMount () {
   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

 componentWillUnmount () {
   this.keyboardDidShowListener.remove();
   this.keyboardDidHideListener.remove();
 }

 _keyboardDidShow = () => {
   this.setState({keyboardVisible: true});
 }

 _keyboardDidHide = () => {
   this.setState({keyboardVisible: false});
 }

  render() {
    return (
      <>
        <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image source={require('../assets/helper_logo.png')} style={{height: '100%', width: '100%'}} resizeMode="center"/>
          </View>
          <View style={{flex: 2}}>
            <View style={{marginTop: 50, alignItems: 'center'}}>
              <TextInput
                style={styles.textInput}
                textContentType="username"
                keyboardType="email-address"
                autoCorrect={false}
                placeholder={'Email'}
                placeholderTextColor={palette.blue}
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <TextInput
                style={[styles.textInput, {marginBottom: 0}]}
                textContentType="password"
                secureTextEntry
                autoCorrect={false}
                placeholder={'Password'}
                placeholderTextColor={palette.blue}
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
            </View>
            <Text
            style={[styles.checkbox, {color: palette.grey, alignSelf: 'flex-end', marginRight: '10%'}]}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            >
            Zapomniałeś hasła?
            </Text>
          </View>
          {!this.state.keyboardVisible &&
            <View style={styles.horizontal}>
            <View style={styles.smallButton}><Button onPress={() => this.props.navigation.navigate('Menu')} text={'Logowanie'} textStyle={{color: '#fff'}} style={[styles.blueButton, {height: 50}]}></Button></View>
            <View style={styles.smallButton}><Button onPress={() => this.props.navigation.navigate('Register')} text={'Rejestracja'} textStyle={{color: '#fff'}} style={[styles.darkgreyButton, {height: 50}]}></Button></View>
            </View>
          }
        </ImageBackground>
      </>
    );
  }
}
