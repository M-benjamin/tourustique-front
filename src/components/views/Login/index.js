import React, { Component } from "react";
import { View, Text , Button, ScrollView, StyleSheet } from "react-native";
import LoadTabs from '../../Tabs'
import Logo from './logo'
import LoginPanel from './LoginPanel'
import { 
  getOrientation, 
  setOrientationListener, 
  removeOrientation,
  getPlateform
} from '../../../utils/misc'
class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state= {
      plateform: getPlateform(),
      orientation: getOrientation(500),
      logoAnimation: false
    }

    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    })
  }

  showLogin = ()  => {
    this.setState({
      logoAnimation: true
    })
  }

  componentWillUnmount() {
    // removeEventListener()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo 
            orientation={this.state.orientation}
            showLogin={this.showLogin}
          />
          <LoginPanel 
            orientation={this.state.orientation}
            show={this.state.logoAnimation}
            plateform={this.state.plateform}
          />      
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
})

export default LoginScreen
