import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Input from '../../../utils/forms/input'
import LoadTabs from '../../Tabs'

import { connect } from 'react-redux';
import { signUp, signIn } from '../../../store/actions/user_action';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {
  state = {
    hasErrors: false,
    type: "Login",
    action: "Login",
    actionLabel: "Not a user, please register",
    form: {
      email: {
        value: "",
        valid: false,
        type:"textinput",
        rules: {
            isRequired: true,
            isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type:"textinput",
        rules: {
            isRequired: true,
            minLength: true
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type:"textinput",
        rules: {
            confirmPass: "password"
        }
      }
    }
  }

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    })
    // > Update all values before mutate the state of form
    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy
    })
  }

  submitUser = () => {
    console.log("SUBMIT");
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for(let key in formCopy){
        if(this.state.type === 'Login'){
            if(key !== 'confirmPassword'){
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value
            }
        } else {
            isFormValid = isFormValid && formCopy[key].valid;
            formToSubmit[key] = formCopy[key].value;
        }
    }

    if(isFormValid){
       if(this.state.type === "Login"){
            this.props.signIn(formToSubmit).then(()=>{
                this.manageAccess()
            })
       } else { 
            this.props.signUp(formToSubmit).then(()=>{
                this.manageAccess()
            })
       }

    } else {
        this.setState({
            hasErrors:true
        })
    }
  }

  // > Check && Change the form type
  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionLabel: type === 'Login' ? 'Not register, login' : 'Not a user, please register'
    })
  }

  // > check type of form for change it
  confirmPassword = () => (
    this.state.type != 'Login' ?
    <Input 
      placeholder="Confirm password please"
      type={this.state.form.confirmPassword.type}
      value={this.state.form.confirmPassword.value}
      onChangeText={(value) => this.updateInput("confirmPassword", value)}
      secureTextEntry
    />
    :null
  )
  
  render() {
    return (
      <View style={styles.formInputContainer}>
        <Input 
          placeholder="Enter email please"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={(value) => this.updateInput("email", value)}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
        <Input 
          placeholder="Enter password please"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={(value) => this.updateInput("password", value)}
          secureTextEntry
        />
        {this.confirmPassword()}
        <View style={
          this.props.plateform == 'android'
          ? styles.androidStyle
          : styles.iosStyle
        }>
          <Button 
            title={this.state.action}
            color="#fd9727"
            // > Doesn't work for moment comment it for debug later
            // onPress={this.submitUser}
            onPress={() => {
              LoadTabs()
            }}
          />
        </View>
        <View style={
          this.props.plateform == 'android'
          ? styles.androidStyle
          : styles.iosStyle
        }>
          <Button 
            title={this.state.actionLabel}
            color="lightgrey"
            onPress={this.changeFormType}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formInputContainer: {
    minHeight: 400
  },
  androidStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  iosStyle: {
    marginTop: 10,
    marginBottom: 10
  }
})

function mapStateToProps(state){
  return{
      User: state.User
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signUp,signIn}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)

