// __tests__/[id].test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Entry from '../pages/[id]'

describe('Entry', () => {
  it('shows related persons heading', () => {
    render(<Entry />)

    const heading = screen.getByRole('heading', {
      name: /I am related to:/i,
    })

    expect(heading).toBeInTheDocument()
  })
})