import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing} from 'react-native';

class Logo extends Component {
  state = {
    selAnime: new Animated.Value(0),
    itAnime: new Animated.Value(0)
  }

  componentWillMount() {
    Animated.sequence([
      Animated.timing(this.state.selAnime, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic
      }),
      Animated.timing(this.state.itAnime, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic
      })
    ]).start(() => {
      this.props.showLogin()
    })
  }

  render() {
    console.log('Orient', this.props.orientation)
    return (
      <View>
        <View style = {
            this.props.orientation === "portrait"
            ? styles.logoStylePortrait
            : styles.logoStyleLandscape
          }>
          <Animated.View style={{
            opacity: this.state.selAnime,
            top: this.state.selAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            })
          }}>
            <Text style={styles.tour}>Tour</Text>
          </Animated.View>
          <Animated.View style={{
            opacity: this.state.itAnime
          }}>
            <Text style={styles.rustique}>Rustique</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  logoStylePortrait: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    maxHeight: 50
  },
  logoStyleLandscape: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    maxHeight: 50
  },
  tour: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: "#fdb823"
  },
  rustique: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: "#474c6b"
  }
})

export default Logo