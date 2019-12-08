import React, {Component} from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Button } from "../components";

import styles from "../styles";
import palette from "../palette";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <>
        <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
          <View style={{alignItems: 'flex-end', top: 20, right: 20, position: 'absolute' }}>
            <Button
            text="Ustawienia konta"
            textStyle={{color: '#fff'}}
            onPress={() => this.props.navigation.navigate('Settings')}
            style={[styles.blueButton, {width: 150, height: 32}]}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Button
              text="Wstaw ogłoszenie"
              textStyle={{color: '#fff', fontSize: 20}}
              onPress={() => this.props.navigation.navigate('Create')}
              style={styles.blueButton}
            />

            <View style={{height: 25}}/>

            <Button
              text="Szukaj ogłoszeń"
              textStyle={{color: '#fff', fontSize: 20}}
              onPress={() => this.props.navigation.navigate('Search')}
              style={styles.blueButton}
            />
          </View>
        </ImageBackground>
      </>
    );
  }
}
