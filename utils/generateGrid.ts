export const generateGrid = (rows: number = 10, cols: number = 10) => {
  let grid: any[] = [];

  for (let i = 0; i < rows; i++) {
    grid.push(new Array(cols));
  }

  return grid;
}
