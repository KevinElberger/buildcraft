import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { generateGrid } from '../../../../utils/grid';
import { selectActiveTile } from '../../../sidebar/slice';
import { setTileInGrid, selectColumns, selectRows, selectTileSize, selectCurrentGrid, selectMode } from '../../slice';

import { useOnMouseMove } from '../../../../shared/hooks/useOnMouseMove';
import { getDatasetFromElement } from '../../../../utils/getDatasetFromElement';

interface Props {
  rows: number;
  columns: number;
}

export const Grid = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const rows = useSelector(selectRows);
  const cols = useSelector(selectColumns);
  const tileSize = useSelector(selectTileSize);
  const activeTile = useSelector(selectActiveTile);
  const currentGrid = useSelector(selectCurrentGrid);
  const tileset = generateGrid(rows, cols, tileSize, currentGrid);

  const setTile = (e: React.MouseEvent, onHover: boolean = true) => {
    const isHoldingMouseButton = e.buttons === 1;
    const { x, y } = getDatasetFromElement(e.target as HTMLElement);

    if (x === null || y === null) {
      return;
    }
    if (onHover && !isHoldingMouseButton) {
      return;
    }

    dispatch(setTileInGrid({
      xIndex: x,
      yIndex: y,
      sprite: mode === 'DRAW' ? activeTile! : null
    }));
  }

  const containerRef = useRef(null);
  useOnMouseMove(containerRef, setTile, [activeTile, mode]);

  return (
    <GridWrapper>
      <TileContainer rows={rows} columns={cols} ref={containerRef} onClick={(e) => setTile(e, false)}>
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

const TileContainer = styled.div<Props>`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`;
