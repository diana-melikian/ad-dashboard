import { Action } from 'easy-peasy'

import { AdsState } from './types'

export default interface AdsModel extends AdsState {
  setAds: Action<AdsState, string[]>
}
