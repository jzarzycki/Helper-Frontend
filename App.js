import React from 'react';
import {
  StatusBar,
  View,
  Text,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import palette from "./app/palette";
import { NavBar } from "./app/components";

import {
  LoginScreen,
  RegisterScreen,
  MenuScreen,
  ForgotPasswordScreen,
  SettingsScreen,
  ViewAdsScreen,
  ViewAdScreen,
  AddAdsScreen,
} from "./app/screens"

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen},
  Menu: {screen: MenuScreen},
  ForgotPassword: {screen: ForgotPasswordScreen},
  Settings: {screen: SettingsScreen},
  Search: {screen: ViewAdsScreen},
  Create: {screen: AddAdsScreen},
  Ad: {screen :ViewAdScreen},
});

const AppContainer = createAppContainer(MainNavigator);

const initialState = {
  showBurger: false,
  user: {
    name: 'Mateusz',
    surname: 'Skomorucha',
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BURGER':
      return {showBurger: !state.showBurger, user: state.user};
  }
  return state;
};
const store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: false,
      currentScreen: '',
      showBurger: false,
      noNavbar: ['Login', 'Register', 'ForgotPassword', 'Menu'],
      titles: {
        'Create': 'Wstaw ogłoszenie',
        'Search': 'Szukaj ogłoszeń',
        'Settings': 'Szukaj ogłoszeń',
        'Ad': 'Ogłoszenie',
      }
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={palette.statusbar} barStyle="light-content" />
        <Provider store={store}>
        { this.state.showNavbar &&
          <NavBar
          text={this.state.currentScreen}
          />
        }
          <AppContainer
            onNavigationStateChange={(prevState, newState, action) => {
              let routeName = newState.routes[newState.index].routeName;
              this.setState({currentScreen: this.state.titles[routeName]});
              if (this.state.noNavbar.includes(routeName)) {
                this.setState({showNavbar: false});
              } else {
                this.setState({showNavbar: true});
              }
            }}
          />
        </Provider>
    </>
    );
  }
}

export default App;
