import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store';

export interface MapState {
  rows: number;
  columns: number;
  tileSize: number;
};

const initialState: MapState = {
  rows: 10,
  columns: 10,
  tileSize: 32
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
})

export const {} = mapSlice.actions

export const selectRows = (state: RootState) => state.map.rows;
export const selectColumns = (state: RootState) => state.map.columns;
export const selectTileSize = (state: RootState) => state.map.tileSize;

export default mapSlice.reducer
