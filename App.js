import { Navigation } from 'react-native-navigation' 
import { Provider } from 'react-redux'
import configureStore from './src/store/config'

import Login from './src/components/views/Login'
import Home from './src/components/views/Home'
import Agenda from './src/components/views/Agenda'
import Detail from './src/components/views/Details'

const store = configureStore()
// > Add store and use provider for link
Navigation.registerComponent('TourustiqueLogin', 
  () => 
    Login,
    store,
    Provider
)
Navigation.registerComponent('TourustiqueHome', 
  () => 
    Home,
    store,
    Provider
)
Navigation.registerComponent('TourustiqueAgenda', 
  () => 
    Agenda,
    store,
    Provider
)

Navigation.registerComponent('Tourustique.Details',
  () =>
  Detail,
  store,
  Provider
);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'TourustiqueLogin',
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})

