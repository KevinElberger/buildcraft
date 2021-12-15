import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Grid } from './components/Grid';
import { Toolbar } from './components/Toolbar';
import { selectColumns, selectRows, selectTileSize } from './slice';

export default function Map() {
  const rows = useSelector(selectRows);
  const cols = useSelector(selectColumns);
  const tileSize = useSelector(selectTileSize);

  return (
    <MapLayout data-testid="map">
      <div>
        <Grid rows={rows} columns={cols} tileSize={tileSize} />
      </div>

      <Toolbar />
    </MapLayout>
  );
}

const MapLayout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;
