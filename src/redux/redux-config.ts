import { createStore } from 'easy-peasy'

import { StoreModel } from './types'
import adsModelInitialState from './initial'

export const storeModel: StoreModel = {
  adsState: adsModelInitialState,
}

const store = createStore(storeModel)
export default store
