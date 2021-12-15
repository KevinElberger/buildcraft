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
  reducers: {
    setRow(state, action) {
      state.rows = action.payload;
    },
    setColumn(state, action) {
      state.columns = action.payload;
    }
  },
})

export const { setRow, setColumn } = mapSlice.actions

export const selectRows = (state: RootState) => state.map.rows;
export const selectColumns = (state: RootState) => state.map.columns;
export const selectTileSize = (state: RootState) => state.map.tileSize;

export default mapSlice.reducer
