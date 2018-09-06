import {
  GET_EVENTS
} from '../types'

import axios from 'axios'
import { URL } from '../../utils/misc'

export function getEvents(category) {
  let URL_EVENT = `${URL}/event`

  if(category != 'All') {
    URL_EVENT = '...'
  }

  const request = axios(URL_EVENT)
    .then(response => {
      const events = []

      for(let key in response.data.events) {
        events.push({
          ...response.data.events[key],
          id: key
        })
      }

      return events;
    })

  return {
    type: GET_EVENTS,
    payload: request
  }
}