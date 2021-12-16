import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { Tile } from '../../../../shared/components/Tile';
import { generateGrid } from '../../../../utils/generateGrid';
import { selectActiveTile } from '../../../sidebar/slice';
import { selectCurrentGrid, setTileInGrid } from '../../slice';

interface Props {
  rows: number;
  columns: number;
  tileSize: number;
}

export const Grid = ({ rows, columns, tileSize }: Props) => {
  const dispatch = useDispatch();
  const activeTile = useSelector(selectActiveTile);
  const currentGrid = useSelector(selectCurrentGrid);

  const tileset = generateGrid(rows, columns);
  const onTileClick = (xIndex: number, yIndex: number) => {
    if (activeTile) {
      dispatch(setTileInGrid({ xIndex, yIndex, sprite: activeTile }));
    }
  };

  tileset.forEach((row: any[], xIndex: number) => {
    for(let i = 0; i < columns; i++) {
      row.push(<Tile size={tileSize} onClick={() => onTileClick(xIndex, i)} sprite={currentGrid[xIndex][i]} key={v4()} />);
    }
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
