import { Ad } from '../redux/types'
import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'

export default function useFetchAds(url: string): Ad[] {
  const [data, setData] = useState<Ad[]>([])

  useEffect(() => {
    async function fetchAds(): Promise<void> {
      try {
        const response = await fetch(url)
        const responseData = await response.json()
        setData(responseData)
      } catch (error) {
        console.error('An error occurred: ', error)
      }
    }

    fetchAds()
  }, [])
  return data
}
