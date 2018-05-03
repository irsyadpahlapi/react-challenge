import { SHOW_PLAYER } from './playertype'

const reducers = (state={},actions) => {
  switch(actions.type){
    case SHOW_PLAYER:
      return actions.payload
    default:
      return state;
  }
}
export default reducers
