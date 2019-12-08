import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
import { Icon } from 'react-native-elements/';

import { Button, BurgerMenu } from "../components";

import styles from "../styles";
import palette from "../palette";
import IP from "../ip";

class ViewAdsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      showFilters: false,
    };
  }

  componentDidMount(){
    // return fetch(IP + '/posts')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({
    //       isLoading: false,
    //       data: responseJson,
    //     }, function(){});
    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
    this.setState({
          isLoading: false,
          data: [
            {
              "title":"Sprzedam opla",
              "category":"Usługi transportowe"
            },
            {
              "title":"Zapchana rura",
              "category":"Naprawy i instalacje"
            },
            {
              "title":"Miau",
              "category":"Koty"
            },
            {
              "title":"Sprzedam węgiel",
              "category":"Handel"
            },
            {
              "title":"Szukam opiekunki",
              "category":"Pomoc domowa"
            },
            {
              "title":"kto poszpachluje w sobote za 10pln/h",
              "category":"Remonty"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
            {
              "title":"Title",
              "category":"Category"
            },
          ]
      })
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Button
          text="Filtruj"
          textStyle={{color: '#fff'}}
          onPress={() => this.setState({showFilters: !this.state.showFilters})}
          style={[styles.blueButton, {width: 150, height: 32, marginRight: 30}]}
          />
        </View>


        <View style={{flex: 8}}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                        this.props.navigation.navigate('Ad', {
                          itemId: index,
                        });}}
                style={[styles.itemContainer, index%2 ?
                   {} :
                   {backgroundColor: '#f0f0f0', borderColor: 'rgba(0, 0, 0, 0.1)', borderWidth: 1}]}
              >
                <Text style={styles.itemCategory}>{item.category}</Text>
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          { this.state.showFilters &&
            <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              height: '30%', width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: 'rgba(0, 0, 0, 0.1)',
              borderBottomWidth: 3,
            }}
            >

            <Text style={{width: '75%', color: palette.grey}}>Kategoria</Text>
            <Picker
            selectedValue={this.state.category}
            style={{width: '80%', color: palette.blue}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({category: itemValue})
            }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>

              <View style={styles.horizontal}>
                <TextInput
                  style={[styles.textInput, {width: '40%'}]}
                  autoCapitalize="words"
                  placeholder={'Cena minimalna'}
                  placeholderTextColor={palette.blue}
                  value={this.state.min}
                  onChangeText={text => this.setState({min: text})}
                />

                <TextInput
                  style={[styles.textInput, {width: '40%'}]}
                  autoCapitalize="words"
                  placeholder={'Cena maksymalna'}
                  placeholderTextColor={palette.blue}
                  value={this.state.max}
                  onChangeText={text => this.setState({max: text})}
                />
              </View>

            </View>
          }
        </View>
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
export default connect(mapStateToProps)(ViewAdsScreen);
