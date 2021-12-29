import React from 'react'
import { render, screen } from '@testing-library/react'
import { Grid } from '../features/map/components/Grid'
import { ReduxProvider } from '../shared/components/ReduxProvider'
import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../features/map/slice';
import sidebarReducer from '../features/tile-sidebar/slice';

describe('Grid', () => {
  it('renders the correct number of elements given the rows and cols', () => {
    const store = configureStore({
      reducer: {
        map: mapReducer,
        sidebar: sidebarReducer
      },
    });

    const wrapper = () => (
      <ReduxProvider reduxStore={store}><Grid /></ReduxProvider>
    );

    render(wrapper());

    const tiles = screen.getAllByRole('button');

    expect(tiles.length).toEqual(100);
  })
})
