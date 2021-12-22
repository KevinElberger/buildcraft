export const getDataset = (target: HTMLElement): { x: number, y: number } => {
  const { x, y } = target?.dataset;
  return { x: Number(x), y: Number(y) };
};
