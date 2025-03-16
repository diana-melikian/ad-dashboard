import { StoreModel } from '@/redux/types'
import { Actions, useStoreActions } from 'easy-peasy'
import { useEffect } from 'react'

export default function useFetchAds(): void {
  const setAds = useStoreActions(
    (actions: Actions<StoreModel>) => actions.adsState.setAds
  )

  useEffect(() => {
    async function fetchAndSetAds(): Promise<void> {
      const response = await fetch(
        'https://my-json-server.typicode.com/akramsaouri/ad-performance/ads'
      )
      const data = await response.json()
      setAds(data)
    }

    fetchAndSetAds()
  }, [])
}
