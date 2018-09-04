import { Navigation } from  "react-native-navigation"
import FalseIcon from '../../assets/images/circle.png'

const LoadsTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen:"TourustiqueHome",
        title: 'Home',
        label: "Home",
        icon: FalseIcon 
      },
      {
        screen:"TourustiqueDetailScreen",
        title: 'DetailScreen',
        label: "DetailScreen",
        icon: FalseIcon 
      }
    ]
  })
}

export default LoadsTabs