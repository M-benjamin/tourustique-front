import React, { Component } from "react";
import { View, Text , Button} from "react-native";
import LoadTabs from '../../Tabs'

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text> LoginScreen </Text>
        <Button 
          title="Go to home"
          onPress= {() => {
            LoadTabs();
          }}
        />
      </View>
    );
  }
}

export default LoginScreen
