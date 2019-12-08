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

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      date: undefined,
      password: '',
      passwordRepeat: '',
      agreed: false,
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
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{flexGrow: 1}}
            >
              <View style={{flex: 2, marginTop: 20}}>
                <View style={{alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize="words"
                    placeholder={'Imie i nazwisko'}
                    placeholderTextColor={palette.blue}
                    value={this.state.name}
                    onChangeText={text => this.setState({name: text})}
                  />
                  <TextInput
                    style={styles.textInput}
                    textContentType="username"
                    keyboardType="email-address"
                    placeholder={'Adres e-mail'}
                    placeholderTextColor={palette.blue}
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                  />
                  <DatePicker
                    style={styles.textInput}
                    showIcon={false}
                    customStyles={{
                      dateInput: {
                        borderWidth: 0,
                      },
                      placeholderText: {
                        alignSelf: 'flex-start',
                        color: palette.blue,
                      },
                      dateText: {
                        alignSelf: 'flex-start',
                        color: palette.blue,
                      }
                    }}
                    date={this.state.date}
                    mode="date"
                    placeholder="Data urodzenia"
                    format="DD-MM-YYYY"
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
                  <TextInput
                    style={styles.textInput}
                    textContentType="password"
                    secureTextEntry
                    placeholder={'Hasło'}
                    placeholderTextColor={palette.blue}
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                  />
                  <TextInput
                    style={styles.textInput}
                    textContentType="password"
                    secureTextEntry
                    placeholder={'Powtórz hasło'}
                    placeholderTextColor={palette.blue}
                    value={this.state.passwordRepeat}
                    onChangeText={text => this.setState({passwordRepeat: text})}
                  />
                  <Text
                    style={[
                      styles.checkbox,
                      this.state.agreed ? {color: palette.blue} : {color: palette.grey}
                    ]}
                      onPress={() => this.setState({agreed: !this.state.agreed})}
                  >
                    Akceptuję regulamin [{this.state.agreed ? '✓' : '   '}]
                  </Text>
                </View>
              </View>
              {!this.state.keyboardVisible &&
                <View style={styles.horizontal}>
                <View style={styles.smallButton}><Button onPress={() => this.props.navigation.navigate('Login')} text={'Logowanie'} textStyle={{color: '#fff'}} style={[styles.blueButton, {height: 50}]}></Button></View>
                <View style={styles.smallButton}><Button onPress={() => this.props.navigation.navigate('Register')} text={'Rejestracja'} textStyle={{color: '#fff'}} style={[styles.darkgreyButton, {height: 50}]}></Button></View>
                </View>
              }
            </ScrollView>
            </View>
          </ImageBackground>
      </>
    );
  }
}
