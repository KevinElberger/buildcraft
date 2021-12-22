import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { generateGrid } from '../../../../utils/generateGrid';
import { selectActiveTile } from '../../../sidebar/slice';
import { setTileInGrid } from '../../slice';
import { useMouseMove } from '../../../../shared/hooks/useMouseMove';
import { getDataset } from '../../../../utils/getDataset';
import { Tile } from '../../../../shared/components/Tile';
import { v4 } from 'uuid';

interface Props {
  rows: number;
  columns: number;
  tileSize: number;
}

export const Grid = ({ rows, columns, tileSize }: Props) => {
  const dispatch = useDispatch();
  const activeTile = useSelector(selectActiveTile);
  const [tileset, setTileset] = useState(generateGrid(rows, columns, tileSize));

  const setTile = (e: React.MouseEvent, onHover: boolean = true) => {
    const { x, y } = getDataset(e.target as HTMLElement);
    const isHoldingMouseButton = e.buttons === 1;

    if (typeof x === 'undefined' || typeof y === 'undefined') {
      return;
    }

    if (onHover && !isHoldingMouseButton) {
      return;
    }

    dispatch(setTileInGrid({
      xIndex: x,
      yIndex: y,
      sprite: activeTile!
    }));
  }

  const containerRef = useRef(null);
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
