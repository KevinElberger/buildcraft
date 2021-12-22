export const getDataset = (target: HTMLElement) => {
  const { x, y } = target?.dataset;
  return { x, y };
};
