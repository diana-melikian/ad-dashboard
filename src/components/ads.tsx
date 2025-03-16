import { StoreModel } from '../redux/types'
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy'
import { ReactElement, useEffect } from 'react'
import { AdRenderer } from './ad-renderer'
import useFetchAds from '../hooks/use-fetch-ads'

export const apiUrl =
  'https://my-json-server.typicode.com/akramsaouri/ad-performance/ads'

export default function Ads(): ReactElement {
  const setAds = useStoreActions(
    (actions: Actions<StoreModel>) => actions.adsState.setAds
  )
  const data = useFetchAds(apiUrl)
  useEffect(() => {
    setAds(data)
  }, [data])

  const ads = useStoreState((state: State<StoreModel>) => state.adsState.ads)

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
