import { SHOW_HEROS, SHOW_HEROS_LOADING, SHOW_HEROS_ERROR, SHOW_HEROS_DETAIL} from './herotype'
import axios from 'axios';

export const heros = () => {
  return dispatch => {
    dispatch(loadHeroLoading())
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      const obj = {
        heros: response.data,
        heros10: response.data.slice(0,9)
      }
      dispatch(loadHeroSuccess(obj))
    })
  }
}

const loadHeroLoading = () => ({
  type: SHOW_HEROS_LOADING
})

const loadHeroSuccess = (payload) => ({
  type: SHOW_HEROS,
  payload: payload
})

const loadHeroError= () => ({
  type: SHOW_HEROS_ERROR
})
