import { configureStore } from '@reduxjs/toolkit'
import mapReducer from '../features/map/slice';
import sidebarReducer from '../features/tile-sidebar/slice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    sidebar: sidebarReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
