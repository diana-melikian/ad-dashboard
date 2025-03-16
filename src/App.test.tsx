import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import App from './App'

test('Work App Component without error', () => {
  render(<App />)

  expect(screen.getByText('Ad Performance Dashboard')).toBeInTheDocument()
})

test('Working Counter', async () => {
  const user = userEvent.setup()
  const { getByText } = render(<App />)
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText(/count is: \d/)

  await user.click(button)
  expect(getByText('count is: 1')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 2')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 3')).toBeInTheDocument()
})
