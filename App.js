import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  TabBarBottom
} from "react-navigation";
import SettingsScreen from "./src/components/Settings";
import HomeScreen from "./src/components/Home";
import { Ionicons } from "react-native-vector-icons/Ionicons";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <HomeScreen />
//       </View>
//     );
//   }
// }

const HomeStack = createStackNavigator({
  Home: HomeScreen
  // Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
  // Details: DetailsScreen
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  }
  // {
  //   /* Other configuration remains unchanged */

  //   navigationOptions: ({ navigation }) => ({
  //     // tabBarIcon: ({ focused, tintColor }) => {
  //     //   const { routeName } = navigation.state;
  //     //   // let iconName;
  //     //   // // if (routeName === "Home") {
  //     //   // iconName = `ios-information-circle${focused ? "" : "-outline"}`;
  //     //   // // } else if (routeName === "Settings") {
  //     //   // //   iconName = `ios-options${focused ? "" : "-outline"}`;
  //     //   // // }
  //     //   // // You can return any component that you like here! We usually use an
  //     //   // // icon component from react-native-vector-icons
  //     //   // return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     // }
  //   }),
  //   tabBarComponent: TabBarBottom,
  //   tabBarPosition: "bottom",
  //   tabBarOptions: {
  //     activeTintColor: "tomato",
  //     inactiveTintColor: "gray"
  //   },
  //   animationEnabled: false,
  //   swipeEnabled: false
  // }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
