
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

export const updateGrid = (grid: any[][], rows: number, cols: number, tileSize: number) => {
  const currentRowCount = grid.length;
  const currentColCount = grid[0].length;

  if (rows > currentRowCount) {
    grid.push(addRow(grid.length, cols, tileSize));
  }
  if (cols > currentColCount) {
    grid.forEach((row, index) => row.push(<Tile size={tileSize} key={v4()} x={index} y={currentColCount} />));
  }
  if (rows < currentRowCount) {
    // delete row
  }
  if (cols < currentColCount) {
    // delete col
  }

  return grid;
};

const addRow = (x: number, y: number, tileSize: number): any[] => {
  let row = [];

  for(let i = 0; i < y; i++) {
    row.push(<Tile size={tileSize} key={v4()} x={x} y={i} />);
  }
  return row;
};
