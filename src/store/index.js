import { createStore } from 'redux'
import axios from 'axios'

const reducers = (state={player:{},heros:{}},actions) => {
  switch(actions.type){
    case 'SHOW_PLAYER' :
      return ({...state,player:actions.payload})
    case 'SHOW_HEROS':
      return ({...state,heros:actions.payload})

  }
}

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
