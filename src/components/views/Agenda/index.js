import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { 
  gridTwoColumns,
  URL
} from '../../../utils/misc'
import axios from 'axios'
import BlockItemAgenda from './blockItemAgenda';

console.disableYellowBox = true;
class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      agenda: [],
    };
  }

  showEvents = () => (
    this.state.agenda.map( (item,i ) => (
      <BlockItemAgenda
        key={`columnHome-${i}`}
        item={item}
        iteration={i}
        goto={this.goToEventHandler}
      />
    ))
  )

  goToEventHandler = (props) =>{
    this.props.navigator.push({
      screen:"Tourustique.Details",
      animationType:"slide-horizontal",
      passProps:{
        EventData: props
      },
      backButtonTitle:'Back to home',
      navigatorStyle:{
        navBarTextFontSize: 20,
        navBarTextColor: '#ffffff',
        navBarTextFontFamily:'RobotoCondensed-Bold',
        navBarBackgroundColor: '#fdb823',
        screenBackgroundColor: '#ffffff'
      }
    })
  }

  componentDidMount() {
    axios.get(`${URL}/calendar/1`).then((result) => {
      console.log("result", result.data.events)
      const newClaendar = gridTwoColumns(result.data.events)

      this.setState({
        isLoading: false,
        agenda: newClaendar
      })
    })
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.articleContainer}>
              <View style={{flex:1}}>
              {this.showEvents()}
              </View>
            </View>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 5,
  },
  isLoading:{
    flex:1,
    alignItems: 'center',
    marginTop: 50
  },
  eventContainer:{
    padding:10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default DetailScreen;
