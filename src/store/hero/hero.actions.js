import { SHOW_HEROS } from './herotype'

export const heros = (datas) => ({
  type: SHOW_HEROS,
  payload: datas
})
