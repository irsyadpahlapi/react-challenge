import { SHOW_PLAYER, SHOW_PLAYER_ERROR, SHOW_PLAYER_LOADING } from './playertype'
import axios from 'axios';

export const players = () => {
  return dispatch => {

    dispatch(loadPlayerLoading())
    axios.get('https://api.opendota.com/api/players/295645191')
    .then ( response => {
      const obj = {
        name: response.data.profile.personaname,
        avatar: response.data.profile.avatarfull
      }
      dispatch(loadPlayerSuccess(obj))
    }).catch(err => {
      dispatch(loadPlayerError())
    })

  }
}

const loadPlayerLoading = () => ({
  type: SHOW_PLAYER_LOADING
})

const loadPlayerSuccess = (payload) => ({
  type: SHOW_PLAYER,
  payload: payload
})

const loadPlayerError= () => ({
  type: SHOW_PLAYER_ERROR
})
