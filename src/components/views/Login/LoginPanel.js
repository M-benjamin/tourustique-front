import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Image} from 'react-native';
import bgImage from '../../../assets/images/logo-tourustique.png'
import LoginForm from './loginForm'

class LoginPanel extends Component {
  state = {
    animeFinished: false,
    backImage: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  }
  // > Lauch second animation only when the first finshed
  componentWillReceiveProps(nextProps) {
    if(nextProps && !this.state.animeFinished){
      Animated.parallel([
        Animated.timing(this.state.backImage, {
          toValue: 1,
          duration: 1000, 
        }),
        Animated.timing(this.state.inputForm, {
          toValue: 1,
          duration: 1500,  
        })
      ]).start(() => {
        this.setState({animeFinished: true})
      })
    }
  }

  render() {
    return (
      <View>
        <Animated.View
          style={{
            opacity:this.state.backImage
          }}
        > 
          <Image
            source={bgImage}
            resizeMode={'contain'}
            style={
              this.props.orientation === "portrait"
              ? styles.imageStylePortrait
              : styles.imageStyleLandscape
            }
          /> 
        </Animated.View>
        <Animated.View
          style={{
            opacity: this.state.inputForm,
            top: this.state.inputForm.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 30]
            })
          }}
        >
         <LoginForm 
            plateform={this.props.plateform}
         />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStylePortrait: {
    width: 270,
    height: 150
  },
  imageStyleLandscape : {
    width: 270,
    height: 0
  }
})

export default LoginPanel
