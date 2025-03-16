import 'ts-jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TextEncoder, TextDecoder } from 'util'
Object.assign(global, { TextDecoder, TextEncoder })

import App from './App'

test('Render app component without error', () => {
  render(<App />)

  expect(screen.getByText('Ad Performance Dashboard')).toBeInTheDocument()
})
