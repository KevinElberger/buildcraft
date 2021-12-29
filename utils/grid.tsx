
import { v4 } from 'uuid';
import Tile from '../shared/components/Tile';

export const generateEmptyGrid = (rows: number = 25, cols: number = 25) => {
  let grid: any[] = [];

  for (let i = 0; i < rows; i++) {
    grid.push(new Array(cols));
  }

  return grid;
};

export const generateGrid = (rows: number = 25, cols: number = 25, tileSize: number, currentGrid: any[][]) => {
  let grid: any[] = generateEmptyGrid(rows, cols);

  grid.forEach((row: any[], xIndex: number) => {
    for(let i = 0; i < cols; i++) {
      row[i] = <Tile size={tileSize} key={v4()} x={xIndex} y={i} sprite={currentGrid[xIndex][i]} />;
    }
  });

  return grid;
}
