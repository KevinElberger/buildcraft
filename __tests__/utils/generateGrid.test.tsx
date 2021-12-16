import * as React from 'react';
import { generateGrid } from '../../utils/generateGrid';

describe('GenerateGrid', () => {
  it('should return the correct default grid size', () => {
    expect(generateGrid().length).toEqual(10);
  });

  it('should return the correct grid size when assigning rows and col values', () => {
    expect(generateGrid(5, 5).length).toEqual(5);
  });
});
