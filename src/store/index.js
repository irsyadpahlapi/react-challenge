import { createStore, combineReducers } from 'redux'
import playerReducers from './player/player.reducer'
import heroReducers from './hero/hero.reducer'

const reducers = combineReducers({
  player: playerReducers,
  hero: heroReducers
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
