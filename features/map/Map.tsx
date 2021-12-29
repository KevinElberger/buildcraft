import * as React from 'react';
import styled from 'styled-components';
import { Grid } from './components/Grid';
import { Toolbar } from './components/Toolbar';

export default function Map() {

  return (
    <MapLayout data-testid="map">
      <div>
        <Grid />
      </div>
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
