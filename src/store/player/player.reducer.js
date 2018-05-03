import { SHOW_PLAYER } from './playertype'

const reducers = (state={player:{}},actions) => {
  switch(actions.type){
    case SHOW_PLAYER:
      return ({...state,heros:actions.payload})
  }
}
export default reducers
