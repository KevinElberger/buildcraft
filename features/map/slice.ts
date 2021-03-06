import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store';
import { TileSprite } from '../../shared/config/tiles';
import { generateEmptyGrid } from '../../utils/grid';

type draw = 'DRAW';
type erase = 'ERASE';

export interface MapState {
  rows: number;
  mode: draw | erase;
  columns: number;
  tileSize: number;
  gridLevel: number;
  tiles: Record<number, any[]>;
};

const initialState: MapState = {
  rows: 25,
  columns: 25,
  tileSize: 32,
  gridLevel: 1,
  mode: 'DRAW',
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
    setTileInGrid(state, action: PayloadAction<{ xIndex: number, yIndex: number, sprite: TileSprite | null }>) {
      const { xIndex, yIndex, sprite } = action.payload;
      state.tiles[state.gridLevel][xIndex][yIndex] = sprite;
    },
    clearGrid(state) {
      Object.keys(state.tiles).forEach((level: string) => {
        state.tiles[Number(level)] = generateEmptyGrid()
      });
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
    deleteGrid(state) {
      state.tiles[state.gridLevel] = generateEmptyGrid(state.rows, state.columns);
    },
    setTileSize(state, action) {
      state.tileSize = action.payload;
    },
    uploadNewMap(state, action) {
      state.rows = action.payload.rows;
      state.columns = action.payload.columns;
      state.gridLevel = 1;
      state.mode = 'DRAW';
      state.tiles = action.payload.tiles;
    }
  },
})

export const { setRow, setColumn, setTileInGrid, clearGrid, setMode, deleteGrid, setTileSize, uploadNewMap } = mapSlice.actions

export const selectMapState = (state: RootState) => state.map;
export const selectMode = (state: RootState) => state.map.mode;
export const selectRows = (state: RootState) => state.map.rows;
export const selectColumns = (state: RootState) => state.map.columns;
export const selectTileSize = (state: RootState) => state.map.tileSize;
export const selectCurrentGrid = (state: RootState) => state.map.tiles[state.map.gridLevel];

export default mapSlice.reducer
