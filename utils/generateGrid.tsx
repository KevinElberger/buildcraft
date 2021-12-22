
import { v4 } from 'uuid';
import { Tile } from "../shared/components/Tile";

export const generateEmptyGrid = (rows: number = 10, cols: number = 10) => {
  let grid: any[] = [];

  for (let i = 0; i < rows; i++) {
    grid.push(new Array(cols));
  }

  return grid;
};

export const generateGrid = (rows: number = 10, cols: number = 10, tileSize: number) => {
  let grid: any[] = generateEmptyGrid(rows, cols);

  grid.forEach((row: any[], xIndex: number) => {
    for(let i = 0; i < cols; i++) {
      row[i] = <Tile size={tileSize} key={v4()} x={xIndex} y={i} />;
    }
  });

  return grid;
}
