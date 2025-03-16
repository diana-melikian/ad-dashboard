import { Action, action } from 'easy-peasy'
import { Ad, AdsState } from './types'

export const setAds: Action<AdsState, Ad[]> = action((state, payload) => {
  state.ads = payload
})
