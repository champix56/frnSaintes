import React,{useState} from 'react';
import { View, Image, Button, Text, StyleSheet, Switch, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import store from '../reducers/reducer';
function Login(props) {
    const [state, setstate] = useState({ login: '', password: '', remember: true });
    return (
      <>
        <View style={{...styles.mainFrame,backgroundColor:props.backgroundC}}>
          <Image source={require('../../img/coop.png')} style={{ width: 80, height: 80, marginBottom: 50 }} />
          <View style={{ backgroundColor: 'white', padding: 20, }}>
            <Text style={{ ...styles.bigDemat, fontWeight: '900' }}>Authentification</Text>
            <TextInput style={styles.smallDemat} placeholder="login" 
              value={state.login} 
              onChangeText={(inputvalue)=>{
                setstate({...state,login:inputvalue});
            }} />
            <TextInput style={styles.smallDemat} placeholder="pass" secureTextEntry={true} 
              value={state.password} 
              onChangeText={(inputvalue)=>{
                setstate({...state,password:inputvalue});
            }}/>
            <Text>Remember me ?</Text>
            <Switch value={state.remember} 
              onValueChange={(value)=>{
                setstate({...state,remember:value});
            }} />
            <Button title="OK" onPress={()=>{
             store.dispatch({type:'LOGIN',login:state.login,password:state.password})
              }}/>
          </View>
        </View>
        <View>
          <Text>Login :{state.login} password :{state.password} remember : {state.remember}</Text>
          {/* <Text>{JSON.stringify(state)}</Text> */}
        </View>
      </>
    );
};
//def des props et de leurs types ainsi que de leur obligation ou non de presence
Login.propTypes={
  onValidateChange:PropTypes.func.isRequired,
  backgroundC:PropTypes.string
}
Login.defaultProps={
  backgroundC:'tomato'
}
  let styles = StyleSheet.create({
    mainFrame:{ alignItems: 'center', paddingTop: '10%', height: '95%' },
    bigDemat: {
      textAlign: 'center',
      fontSize: 38,
      color: 'skyblue'
    },
    smallDemat: {
      textAlign: 'left',
      fontSize: 30,
      color: 'tomato'
    }
  });


  export default Login;