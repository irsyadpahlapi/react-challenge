import { SHOW_PLAYER } from './playertype'

export const players = (datas) => ({
  type: SHOW_PLAYER,
  payload: datas
})
