export const getDatasetFromElement = (target: HTMLElement): { x: number | null, y: number | null } => {
  const { x, y } = target?.dataset;

  return { x: x ? Number(x) : null, y: y ? Number(y) : null };
};
