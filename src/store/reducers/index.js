import { combineReducers } from 'redux'
import  User from './user_reducer'
import  Events from './event_reducer'

const rootReducer =  combineReducers({
  User,
  Events
})

export default rootReducer