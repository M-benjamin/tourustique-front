import { 
  Dimensions,
  Platform 
} from 'react-native'

export const URL = 'http://localhost:4241/api'
export const SIGNUP = 'http://localhost:4241/api/auth/register/'
export const SIGNIN = 'http://localhost:4241/api/auth/login/'

// > Get orientation
export const getOrientation = (value) => {
  return Dimensions.get("window").height > value ? "portrait" : "landscape"
}
// > Set orientation
export const setOrientationListener = (cb) => {
  return Dimensions.addEventListener("change", cb)
}
// > Remove event after add it
export const removeOrientation = () => {
  return Dimensions.removeEventListener("change")
} 
// > Check plateForm
export const getPlateform = () => {
  if (Platform.OS == 'ios') {
    return "ios"
  } else {
    return "android"
  }
}

// > For print cards side by side
export const gridTwoColumns = (list) => {
  let newEvents = [];
  let events = list;
  let count = 1;
  let vessel = {};

  if(events){
      events.forEach( element =>{
          if(count == 1){
              vessel["blockOne"] = element;
              count++;
          } else {
              vessel["blockTwo"] = element;
              newEvents.push(vessel);

              count = 1;
              vessel = {};
          }
      })
  }
  return newEvents;
}

