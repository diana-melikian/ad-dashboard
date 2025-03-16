import { StoreModel } from '@/redux/types'
import { State, useStoreState } from 'easy-peasy'
import { ReactElement } from 'react'
import { AdRenderer } from './ad-renderer'

export default function Ads(): ReactElement {
  const ads = useStoreState((state: State<StoreModel>) => state.adsState.ads)
  console.log({ ads })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {ads.map((ad) => {
        return (
          <AdRenderer
            key={ad.id}
            type={ad.type}
            impressions={ad.impressions}
            clicks={ad.clicks}
            ctr={ad.ctr}
            url={ad.url}
            headline={ad.headline}
            description={ad.description}
          />
        )
      })}
    </div>
  )
}
