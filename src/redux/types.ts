import AdsModel from './model'

export enum AdType {
  IMAGE = 'image',
  TEXT = 'text',
  VIDEO = 'video'
}

export interface Ad {
  type: AdType
  impressions: number
  clicks: number
  ctr: number
  id?: string
  headline?: string
  description?: string
  url?: string
}

export interface AdsState {
  ads: Ad[]
}

export interface StoreModel {
  adsState: AdsModel
}
