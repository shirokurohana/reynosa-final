// __tests__/id.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a link', () => {
    render(<Home />)

    const link = screen.getByRole('link', {
      name: /La Familia Reynosa/i,
    })

    expect(link).toBeInTheDocument()
  })
})