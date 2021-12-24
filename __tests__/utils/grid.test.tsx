import * as React from 'react';
import { generateEmptyGrid } from '../../utils/grid';

describe('GenerateGrid', () => {
  it('should return the correct default grid size', () => {
    expect(generateEmptyGrid().length).toEqual(10);
  });

  it('should return the correct grid size when assigning rows and col values', () => {
    expect(generateEmptyGrid(5, 5).length).toEqual(5);
  });
});
