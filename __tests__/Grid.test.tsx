import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../features/map/components/Grid'

describe('Grid', () => {
  it('renders the correct number of elements given the rows and cols', () => {
    render(<Grid rows={10} columns={10} tileSize={10} />);

    const tiles = screen.getAllByRole('button');

    expect(tiles.length).toEqual(100);
  })
})
