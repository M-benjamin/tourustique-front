import { Navigation } from  "react-native-navigation"
import FalseIcon from '../../assets/images/circle.png'
import Icon from 'react-native-vector-icons/FontAwesome';

const navStyle = {
  navBarTextFontSize: 20,
  navBarTextColor: '#ffffff',
  navBarTextFontFamily: 'RobotoCondensed-Bold',
  navBarTitleTextCentered: true,
  navBarBackgroundColor: '#fdb823'
}

const LoadsTabs = () => {
  Promise.all([
    Icon.getImageSource('bars', 20, 'white'),
    Icon.getImageSource('dollar', 20, 'white'),
    Icon.getImageSource('search', 20, 'white')
  ]).then( sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen:"TourustiqueHome",
          title: 'Home',
          label: "Home",
          icon: sources[2],
          navigatorStyle: navStyle
        },
        {
          screen:"TourustiqueAgenda",
          title: 'Agenda',
          label: "Agenda",
          icon: sources[1],
          navigatorStyle: navStyle 
        }
      ],
      tabsStyle: {
        tabBarButtonColor: 'grey',
        tabBarSelectedButtonColor: '#fdb823',
        tabBarTextFontFamily: 'RobotoCondensed-Bold',
        tabBarBackgroundColor: 'white',
        tarBarTranslucent: false
      },
      appStyle: {
        tabBarButtonColor: 'grey',
        tabBarSelectedButtonColor: '#fdb823',
        tabBarTextFontFamily: 'RobotoCondensed-Bold',
        tabBarBackgroundColor: 'white'
      }
    })
  }) 
}

export default LoadsTabs