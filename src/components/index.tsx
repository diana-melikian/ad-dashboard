import { ReactElement } from 'react'

import Ads from './ads'
import Statistics from './statistics'
import useFetchAds from '../hooks/use-fetch-ads'

export default function Index(): ReactElement {
  useFetchAds()

  return (
    <>
      <h1 className="font-bold text-2xl m-4">Ad Performance Dashboard</h1>
      <Statistics />
      <Ads />
    </>
  )
}
