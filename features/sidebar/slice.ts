import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store';

export interface SidebarState {
  activeTile: string | null;
};

const initialState: SidebarState = {
  activeTile: null
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveTile(state, action) {
      state.activeTile = action.payload;
    }
  },
})

export const { setActiveTile } = sidebarSlice.actions

export const selectActiveTile = (state: RootState) => state.sidebar.activeTile;

export default sidebarSlice.reducer
