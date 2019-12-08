import React, {Component} from 'react';
import {
  StatusBar,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import {connect} from "react-redux";
import { Icon } from 'react-native-elements/';

import { NavBar, Button, BurgerMenu, ContactTab, AddressTab } from "../components";

import styles from "../styles";
import palette from "../palette";

class SettingsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      showContactTab: true,
    };
  }

  render() {
    return (
      <>
        <ImageBackground source={require('../assets/background.png')} style={{flex: 1}}>
          <View style={{flex: 1, marginTop: 30}}>
            <View style={[styles.horizontal]}>
              <View style={styles.smallButton}>
                <Button
                  onPress={() => {
                    this.setState({showContactTab: true});
                  }}
                  text={'Dane kontaktowe'} textStyle={{color: '#fff'}}
                  style={[
                    styles.blueButton,
                    {height: 50},
                    this.state.showContactTab ? {backgroundColor: palette.blue} : {backgroundColor: palette.lightblue}]
                  }
                />
              </View>
              <View style={styles.smallButton}>
                <Button
                  onPress={() => {
                    this.setState({showContactTab: false});
                  }}
                  text={'Dane Adresowe'} textStyle={{color: '#fff'}}
                  style={[
                    styles.blueButton,
                    {height: 50},
                    !this.state.showContactTab ? {backgroundColor: palette.blue} : {backgroundColor: palette.lightblue}
                  ]}
              />
              </View>
            </View>

          { this.state.showContactTab ?
            <ContactTab/> :
            <AddressTab/>
          }

          </View>
        </ImageBackground>
        <BurgerMenu navigation={this.props.navigation}/>
      </>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps)(SettingsScreen);
