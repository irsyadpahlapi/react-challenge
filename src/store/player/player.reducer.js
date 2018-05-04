import { SHOW_PLAYER, SHOW_PLAYER_ERROR, SHOW_PLAYER_LOADING } from './playertype'

const initialState = {
  data : {},
  loading: false,
  error: false
}
const reducers = (state={...initialState},actions) => {
  switch(actions.type){
    case SHOW_PLAYER:
      return ({...state,
              data:actions.payload,
              loading:false})
    case SHOW_PLAYER_LOADING:
      return ({...state,loading:true})
    case SHOW_PLAYER_ERROR:
      return ({...state,error:true})
    default:
      return state;
  }
}

export default reducers
