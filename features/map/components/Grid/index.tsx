import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { generateGrid } from '../../../../utils/generateGrid';
import { selectActiveTile } from '../../../sidebar/slice';
import { setTileInGrid } from '../../slice';
import { useMouseMove } from '../../../../shared/hooks/useMouseMove';
import { getDataset } from '../../../../utils/getDataset';

interface Props {
  rows: number;
  columns: number;
  tileSize: number;
}

export const Grid = ({ rows, columns, tileSize }: Props) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const activeTile = useSelector(selectActiveTile);
  const tileset = generateGrid(rows, columns, tileSize);

  const setTile = (e: React.MouseEvent, onHover: boolean = true) => {
    const { x, y } = getDataset(e.target as HTMLElement);
    const isHoldingMouseButton = e.buttons === 1;

    if (!x || !y) {
      return;
    }

    if (onHover && !isHoldingMouseButton) {
      return;
    }

    dispatch(setTileInGrid({
      xIndex: Number(x),
      yIndex: Number(y),
      sprite: activeTile!
    }));
  }

  useMouseMove(containerRef, setTile, [activeTile]);

  return (
    <GridWrapper>
      <TileContainer rows={rows} columns={columns} ref={containerRef} onClick={(e) => setTile(e, false)}>
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
