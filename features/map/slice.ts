import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store';
import { TileSprite } from '../../shared/config/tiles';
import { generateEmptyGrid } from '../../utils/grid';

export interface MapState {
  rows: number;
  columns: number;
  tileSize: number;
  gridLevel: number;
  tiles: Record<number, any[]>;
};

const initialState: MapState = {
  rows: 10,
  columns: 10,
  tileSize: 32,
  gridLevel: 1,
  tiles: {
    1: generateEmptyGrid(),
  },
};

// TODO: Do we care if every layer can be a different WxH?
export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setRow(state, action) {
      action.payload > state.rows ?
      state.tiles[state.gridLevel].push(new Array(state.columns)) :
      state.tiles[state.gridLevel].pop();
      state.rows = action.payload;
    },
    setColumn(state, action) {
      action.payload > state.columns ?
      state.tiles[state.gridLevel].forEach(col => col.push(null)) :
      state.tiles[state.gridLevel].forEach(col => col.pop());
      state.columns = action.payload;
    },
    setTileInGrid(state, action: PayloadAction<{ xIndex: number, yIndex: number, sprite: TileSprite }>) {
      const { xIndex, yIndex, sprite } = action.payload;
      state.tiles[state.gridLevel][xIndex][yIndex] = sprite;
    },
    clearGrid(state) {
      Object.keys(state.tiles).forEach((level: string) => {
        state.tiles[Number(level)] = generateEmptyGrid()
      });
    }
  },
})

export const { setRow, setColumn, setTileInGrid, clearGrid } = mapSlice.actions

export const selectRows = (state: RootState) => state.map.rows;
export const selectColumns = (state: RootState) => state.map.columns;
export const selectTileSize = (state: RootState) => state.map.tileSize;
export const selectCurrentGrid = (state: RootState) => state.map.tiles[state.map.gridLevel];

export default mapSlice.reducer
