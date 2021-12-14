import * as React from 'react';
import styled from 'styled-components';
import { Tile } from '../Tile';

interface Props {
  rows: number;
  columns: number;
}

export const Grid = ({ rows, columns }: Props) => {
  const tileset = new Array(rows).fill(0).map(row => {
    const rows: any[] = [];

    new Array(columns).fill(0).forEach(column => {
      return rows.push(<Tile />)
    });

    return rows;
  });

  return (
    <GridWrapper>
      <TileContainer>
        { tileset }
      </TileContainer>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  padding: 8px;
  border-radius: 4px;
  display: inline-flex;
  background: ${({ theme }) => theme.white};
`;

const TileContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
`;
