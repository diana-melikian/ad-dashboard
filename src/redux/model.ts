import { Action } from 'easy-peasy'

import { Ad, AdsState } from './types'

export default interface AdsModel extends AdsState {
  setAds: Action<AdsState, Ad[]>
}
