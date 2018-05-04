import { SHOW_HEROS, SHOW_HEROS_LOADING, SHOW_HEROS_ERROR } from './herotype'

const initialState = {
  data : {},
  loading: false,
  error: false
}

const reducers = (state={...initialState},actions) => {
  switch(actions.type){
    case SHOW_HEROS:
      return ({...state,
              data:actions.payload,
              loading:false})
    case SHOW_HEROS_LOADING:
      return ({...state,loading:true})
    case SHOW_HEROS_ERROR:
      return ({...state,error:true})
    default:
      return state
  }
}

export default reducers
