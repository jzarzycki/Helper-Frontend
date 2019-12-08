import React, {Component} from 'react';
import {
  View,
  TextInput,
  DatePicker,
} from 'react-native';

import { Button } from ".";

import styles from "../styles";
import palette from "../palette";

export default class ContactTab extends Component {
  constructor() {
    super();
    this.state = {
      street: '',
      building: '',
      apartment: '',
      zipCode: '',
      city: '',
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
            placeholder={'Ulica'}
            placeholderTextColor={palette.blue}
            value={this.state.street}
            onChangeText={text => this.setState({street: text})}
          />

          <View style={styles.horizontal}>
            <TextInput
              style={[styles.textInput, {width: '35%', marginRight: '3%'}]}
              autoCapitalize="words"
              placeholder={'Numer budynku'}
              placeholderTextColor={palette.blue}
              value={this.state.building}
              onChangeText={text => this.setState({building: text})}
            />

            <TextInput
              style={[styles.textInput, {width: '35%', marginLeft: '3%'}]}
              autoCapitalize="words"
              placeholder={'Numer mieszkania'}
              placeholderTextColor={palette.blue}
              value={this.state.apartment}
              onChangeText={text => this.setState({apartment: text})}
            />
          </View>

          <TextInput
          style={styles.textInput}
          autoCapitalize="words"
          placeholder={'Kod pocztowy'}
          placeholderTextColor={palette.blue}
          value={this.state.zipCode}
          onChangeText={text => this.setState({zipCode: text})}
          />

          <TextInput
          style={styles.textInput}
          autoCapitalize="words"
          placeholder={'Miejscowość'}
          placeholderTextColor={palette.blue}
          value={this.state.city}
          onChangeText={text => this.setState({city: text})}
          />

          <Button onPress={() => {}} text={'Zapisz zmiany'} textStyle={{color: '#fff'}} style={[styles.blueButton, {width: 150, height: 32, marginTop: 35, marginRight: '35%'}]}></Button>
        </View>
      </>
    );
  }
}
