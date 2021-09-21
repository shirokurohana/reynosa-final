// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a pre', () => {
    render(<Home />)

    const pre = screen.getByRole('pre', {
      name: /Mi familia/i,
    })

    expect(pre).toBeInTheDocument()
  })
})