import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {connect} from "react-redux";

import styles from "../styles";
import palette from "../palette";

class BurgerMenu extends Component {
  render() {
    if (!this.props.showBurger){
      return(<View/>);
    }
    return (
      <>
        <View
          style={{
            position: 'absolute',
            width: '70%', height: '100%',
            top: 0, left: 0,
            backgroundColor: '#fafafa',
            borderRightWidth: 2,
            borderRightColor: 'rgba(0, 0, 0, 0.1)',
            elevate: 1,
          }}
        >
          <View style={{
            flex: 1.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%',
          }}>
            <View style={{
              height: 80, width: 80,
              backgroundColor: palette.grey,
              borderRadius: 90,
              marginLeft: '10%',
            }}>
            </View>
            <View style={{
              flex: 1,
              marginLeft: '5%',
            }}>
              <Text style={{color: palette.grey}}>{this.props.user.name}</Text>
              <Text style={{color: palette.darkgrey, fontSize: 18}}>{this.props.user.surname}</Text>
            </View>
          </View>
          <View style={{
            flex: 3,
            alignItems: 'center',
          }}>
            <Text
              style={{color: palette.darkgrey, fontSize: 20, margin: 16}}
              onPress={()=>{this.props.navigation.navigate('Create');this.props.toggleBurger()}}
            >
              Wstaw ogłoszenie
            </Text>
            <Text
              style={{color: palette.darkgrey, fontSize: 20, margin: 16}}
              onPress={()=>{this.props.navigation.navigate('Search');this.props.toggleBurger()}}
            >Szukaj ogłoszeń</Text>
            <Text
              style={{color: palette.blue, fontSize: 20, margin: 16}}
              onPress={()=>{this.props.navigation.navigate('MyAds');this.props.toggleBurger()}}
            >
              Moje ogłoszenia
            </Text>
          </View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text
              style={{
                color: palette.darkgrey,
                fontSize: 16,
              }}
              onPress={()=>{this.props.navigation.navigate('Settings');this.props.toggleBurger()}}
            >
              Ustawienia Konta
            </Text>
            <Text
            style={{
              color: palette.grey,
              fontSize: 14,
              marginTop: 12,
            }}
            onPress={()=>{this.props.navigation.navigate('Login');this.props.toggleBurger()}}
            >
              Wyloguj się
            </Text>
          </View>
        </View>
      </>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    showBurger: state.showBurger,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    toggleBurger: () => dispatch({ type: 'TOGGLE_BURGER' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
