import { Ad, AdType } from '../redux/types'
import { ReactElement } from 'react'

export interface AdAttributeProps {
  attributeTitle: string
  attributeValue: string
}

function AdAttribute(props: AdAttributeProps): ReactElement {
  const { attributeTitle, attributeValue } = props
  return (
    <div className="mt-4 mr-2 basis-sm">
      <div className="text-xs font-bold text-gray-500">{attributeTitle}</div>
      <div className="mt-1 font-bold text-gray-700">{attributeValue}</div>
    </div>
  )
}

// TODO: image to occupy full width and be cut in height if needed
// TODO: improve grid

export function AdRenderer(props: Ad): ReactElement {
  const { type, impressions, clicks, ctr, headline, description, url } = props

  const AdCover = (): ReactElement => {
    let cover: ReactElement
    switch (type) {
      case AdType.IMAGE:
        cover = <img className="rounded h-full" src={url} alt="ad-image" />
        break
      case AdType.VIDEO:
        cover = (
          <video controls>
            <source src={url} />
          </video>
        )
        break
      case AdType.TEXT:
      default:
        cover = (
          <div>
            <div className="pt-18 font-bold text-gray-700">
              {headline ?? 'Headline'}
            </div>
            <div className="text-xs font-bold text-gray-500">
              {description ?? 'Description'}
            </div>
          </div>
        )
        break
    }
    return cover
  }

  return (
    <div className="p-2 m-2 w-3xs sm:w-2xs md:w-xs xl:w-sm shadow-md">
      <div className="h-50">
        <AdCover />
      </div>

      <div className="flex flex-row">
        <AdAttribute
          attributeTitle={'Impressions'}
          attributeValue={impressions.toLocaleString('no')}
        />
        <AdAttribute
          attributeTitle={'Clicks'}
          attributeValue={clicks.toLocaleString('no')}
        />
        <AdAttribute
          attributeTitle={'CTR'}
          attributeValue={ctr.toString() + '%'}
        />
      </div>
    </div>
  )
}
