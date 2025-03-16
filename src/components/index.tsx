import { ReactElement } from 'react'

export default function Index(): ReactElement {
  return (
    <>
      <div className="test1">
        <img className="test2" src="/public/favicon.svg" alt="ChitChat Logo" />
        <div>
          <div className="test3">ChitChat</div>
          <p className="test4">You have a new message!</p>
        </div>
      </div>
    </>
  )
}
