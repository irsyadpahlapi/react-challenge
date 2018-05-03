import { SHOW_HEROS } from './herotype'

const reducers = (state={},actions) => {
  switch(actions.type){
    case 'SHOW_HEROS':
      return actions.payload
    default:
      return state
  }
}

export default reducers
