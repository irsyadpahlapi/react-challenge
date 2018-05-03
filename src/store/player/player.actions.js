import { SHOW_PLAYER } from './playertype'

import axios from 'axios'

export const loadPlayer = (payload) => {
  return dispatch => {
    axios.get('https://api.opendota.com/api/players/295645191')
    .then ( response => {
      const obj = {
        name: response.data.profile.personaname,
        avatar: response.data.profile.avatarfull
      }
      dispatch(loadPlayersSuccess(obj))
    })
  }
}

const loadPlayersSuccess = (payload) => ({
  type: SHOW_PLAYER,
  payload: payload
})
