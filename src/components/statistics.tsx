import { StoreModel } from '../redux/types'
import { State, useStoreState } from 'easy-peasy'
import { ReactElement, Suspense } from 'react'

export interface StatCardProps {
  title: string
  value: string
}

function StatCard(props: StatCardProps): ReactElement {
  const { title, value } = props
  return (
    <div className="p-2 m-2 w-5xs sm:w-4xs md:w-xs xl:w-lg shadow-md">
      <div className="mt-4 mr-2">
        <div className="text-xs font-bold text-gray-500">{title}</div>
        <div className="mt-1 font-bold text-gray-700">{value}</div>
      </div>
    </div>
  )
}

export default function Statistics(): ReactElement {
  const ads = useStoreState((state: State<StoreModel>) => state.adsState.ads)

  if (ads.length === 0) return <div></div>

  const impressionsSum = ads
    .map((ad) => Number(ad.impressions))
    .reduce((prev, curr) => prev + curr)

  const clicksSum = ads
    .map((ad) => Number(ad.clicks))
    .reduce((prev, curr) => prev + curr)

  const averageCtr =
    Math.round(
      (ads.map((ad) => Number(ad.ctr)).reduce((prev, curr) => prev + curr) /
        ads.length) *
        100
    ) / 100

  return (
    <div className="grid grid-cols-3">
      <StatCard
        title="Total Impressions"
        value={impressionsSum.toLocaleString('no')}
      />
      <StatCard title="Total Clicks" value={clicksSum.toLocaleString('no')} />
      <StatCard title="Average CTR" value={averageCtr.toString() + '%'} />
    </div>
  )
}
