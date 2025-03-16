import { Action, action } from 'easy-peasy'
import { AdsState } from './types'

export const setAds: Action<AdsState, []> = action((state, payload) => {
  state.ads = payload
})
