import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { getEvents } from '../../../store/actions/events_actions'
import { 
  gridTwoColumns
} from '../../../utils/misc'
import BlockItemHome from './blockItemHome';

console.disableYellowBox = true;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      agenda: [],
      events: []
    };
  }

  showEvents = () => (
    this.state.events.map( (item,i ) => (
      <BlockItemHome
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
        navBarBackgroundColor: '#00ADA9',
        screenBackgroundColor: '#ffffff'
      }
    })
  }

  componentDidMount() {
    this.props.getEvents('All').then(() => {
      const newEvents = gridTwoColumns(this.props.Events.list)
      this.setState({
        isLoading: false,
        events: newEvents
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

function mapStateToProps(state){
  return {
    Events: state.Events
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents}, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
