import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {connect} from "react-redux";
import { Icon } from 'react-native-elements/';

import styles from "../styles";
import palette from "../palette";

class NavBar extends Component {
  render() {
    return (
      <>
        <View
        style={{
          height: '10%',
          backgroundColor: '#eee',
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomWidth: 3,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        }}>
          <Icon
            onPress={this.props.toggleBurger}
            name='menu'
            type='material'
            iconStyle={{
              marginHorizontal: 15,
            }}
            size={36}
            containerStyle={{width: 58}}
          />
          <Text style={{marginLeft: '5%'}}>{this.props.text}</Text>
        </View>
      </>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    showBurger: state.showBurger,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    toggleBurger: () => dispatch({ type: 'TOGGLE_BURGER' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
