import React from 'react'
import { render } from '../testUtils'
import { Home } from '../../pages/index'

const H2 = 'h2-description'
const DESC = 'some description'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home seoDynamicDescription={DESC} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('H2 rendered correctly', () => {
    const { getByTestId } = render(<Home seoDynamicDescription={DESC} />, {})
    expect(getByTestId(H2).textContent).toBe(DESC)
  })
})
