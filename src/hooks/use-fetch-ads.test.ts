import { renderHook, waitFor } from '@testing-library/react'
import useFetchAds from './use-fetch-ads'
import { apiUrl } from '../components/ads'

global.fetch = jest.fn()

describe('useFetchedData', () => {
  test('should return data', async () => {
    const { result } = renderHook(() => useFetchAds(apiUrl))

    await waitFor(() => {
      expect(result.current.length > 0).toBe(true)
      expect(result.current[0].hasOwnProperty('type')).toBe(true)
      expect(result.current[0].hasOwnProperty('impressions')).toBe(true)
    })
  })
})
