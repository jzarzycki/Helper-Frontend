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
    };
  }

  render() {
    return (
      <>
      <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TextInput
              style={[styles.textInput, {height: 60}]}
              autoCapitalize="sentences"
              placeholder={'Tytuł ogłoszenia'}
              placeholderTextColor={palette.blue}
              value={this.state.title}
              onChangeText={text => this.setState({title: text})}
            />
            <Text style={{
              color: palette.blue,
              width: '80%',
              marginTop: 10,
              marginLeft: 10,
            }}
              >
                Opis
              </Text>
            <TextInput
              multiline
              style={[
                styles.textInput,
                {
                  height: '35%',
                  borderColor: '#999999',
                  borderWidth: 1,
                }]}
              autoCapitalize="sentences"
              placeholderTextColor={palette.blue}
              value={this.state.description}
              onChangeText={text => this.setState({description: text})}
            />
            <TextInput
              style={[styles.textInput, {height: 60, marginTop: 20}]}
              autoCapitalize="sentences"
              placeholder={'Kwota'}
              placeholderTextColor={palette.blue}
              value={this.state.price}
              onChangeText={text => this.setState({price: text})}
            />
            <Picker
            selectedValue={this.state.category}
            style={{width: '82%', marginTop: 20, color: palette.blue}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({category: itemValue})
            }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Button
              onPress={() => {}}
              text={'Dodaj ogłoszenie'}
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
