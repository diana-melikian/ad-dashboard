import { ReactElement, useEffect, useState } from 'react'

import { AdRenderer } from './ad-renderer'

export default function Index(): ReactElement {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/akramsaouri/ad-performance/ads')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  console.log({ data })

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data &&
          data.map((ad) => {
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
    </>
  )
}
