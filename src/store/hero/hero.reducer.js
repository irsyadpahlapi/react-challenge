import { SHOW_HEROS } from './herotype'

const reducers = (state={player:{},heros:{}},actions) => {
  switch(actions.type){
    case 'SHOW_HEROS':
      return ({...state,heros:actions.payload})

  }
}

export default reducers
