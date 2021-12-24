import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { generateGrid, updateGrid } from '../../../../utils/grid';
import { selectActiveTile } from '../../../sidebar/slice';
import { setTileInGrid, selectColumns, selectRows, selectTileSize } from '../../slice';

import { useOnMouseMove } from '../../../../shared/hooks/useOnMouseMove';
import { getDatasetFromElement } from '../../../../utils/getDatasetFromElement';
import { Tile } from '../../../../shared/components/Tile';
import { v4 } from 'uuid';
import produce from 'immer';
import { throttle } from '../../../../utils/throttle';

interface Props {
  rows: number;
  columns: number;
}

export const Grid = () => {
  const dispatch = useDispatch();
  const rows = useSelector(selectRows);
  const cols = useSelector(selectColumns);
  const tileSize = useSelector(selectTileSize);
  const activeTile = useSelector(selectActiveTile);
  const [tileset, setTileset] = useState(generateGrid(rows, cols, tileSize));

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
      sprite: activeTile!
    }));
    setTileset(produce(tileset => {
      tileset[x][y] = <Tile size={tileSize} key={v4()} x={x} y={y} sprite={activeTile} />;
    }));
  }

  const containerRef = useRef(null);
  useOnMouseMove(containerRef, setTile, [activeTile]);

  useEffect(() => {
    throttle(setTileset(produce(tileset => updateGrid(tileset, rows, cols, tileSize))) as any, 100);
  }, [rows, cols, tileSize]);

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
