import { Navigation } from 'react-native-navigation' 

import Login from './src/views/Login'
import Home from './src/views/Login'

Navigation.registerComponent('TourustiqueLogin', () => Login)
Navigation.registerComponent('TourustiqueHome', () => Home)

export default () => Navigation.startSingleScreenApp ({
  screen: {
    screen: 'TourustiqueLogin',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})

