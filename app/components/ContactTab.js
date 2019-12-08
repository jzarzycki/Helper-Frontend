import React, {Component} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-datepicker'

import { Button } from ".";

import styles from "../styles";
import palette from "../palette";

export default class ContactTab extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      date: '',
      password: '',
      passwordRepeat: '',
    };
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '10%'
          }}
        >

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
            onDateChange={date => {this.setState({date: date})}}
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

          <Button
            onPress={() => {}}
            text={'Zapisz zmiany'}
            textStyle={{color: '#fff'}}
            style={[
              styles.blueButton,
              {
                width: 150,
                height: 32,
                marginTop: 35,
                marginRight: '35%',
              }]}
          />

        </View>
      </>
    );
  }
}
