import store from './reducers/reducer';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
/**
 * Composant principale de mon app
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { produits: [], currentProduct: null, whoAmI: null };
    store.subscribe(
      () => {
        this.setState(store.getState());
      }
    )
  }
  // authentification = (login, mdp) => {
  //   if (login === 'Alex' && mdp === 'alex') {
  //     this.setState({ whoAmI: login });
  //   }
  // }
  // logout=()=>{
  //   this.setState({whoAmI:null});
  // }
  render() {
    return (
      <>
        <View><Text>AppState : {JSON.stringify(this.state)}</Text></View>
        <View>
          {
            this.state.whoAmI===null?
            <Login />:
            <Home name={this.state.whoAmI} logout={()=>{this.setState({whoAmI:null})}}/>
          }
        </View>
      </>
    );
  }
}

export default App;