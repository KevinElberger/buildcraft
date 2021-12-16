import * as React from 'react';
import styled from 'styled-components';
import { Tile } from '../../../../shared/components/Tile';
import { generateGrid } from '../../../../utils/generateGrid';

interface Props {
  rows: number;
  columns: number;
  tileSize: number;
}

export const Grid = ({ rows, columns, tileSize }: Props) => {
  const tileset = generateGrid(rows, columns);

  tileset.forEach(row => {
    row.fill(<Tile size={tileSize} onClick={() => {}} />)
  });

  return (
    <GridWrapper>
      <TileContainer rows={rows} columns={columns}>
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

const TileContainer = styled.div<Pick<Props, 'rows' | 'columns'>>`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`;
