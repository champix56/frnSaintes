import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
export default function Home(props) {
  return (
    <View>
      <Text>
        DEMAT : {props.name}
      </Text>
      <Button title="disconnect" onPress={props.logout()}
      />
     </View>
  );
}
Home.propType={
    name:PropTypes.string.isRequired,
    logout:PropTypes.func.isRequired
}
Home.defaultProps={logout:() => {}}
