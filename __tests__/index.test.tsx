import React from 'react'
import { render, screen } from '@testing-library/react'
import Builder from '../pages/index'
import { configureStore } from '@reduxjs/toolkit'
import { ReduxProvider } from '../shared/components/ReduxProvider'
import mapReducer from '../features/map/slice';
import sidebarReducer from '../features/sidebar/slice';

describe('Builder', () => {
  it('renders a grid', () => {
    const store = configureStore({
      reducer: {
        map: mapReducer,
        sidebar: sidebarReducer
      },
    });

    const wrapper = () => (
      <ReduxProvider reduxStore={store}><Builder /></ReduxProvider>
    );

    render(wrapper());

    const map = screen.getByTestId('map');

    expect(map).toBeInTheDocument();
  })
})
