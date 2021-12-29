import * as React from 'react';
import styled from 'styled-components';
import { Grid } from './components/Grid';

export default function Map() {

  return (
    <MapLayout data-testid="map">
      <Grid />
    </MapLayout>
  );
}

const MapLayout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
  align-items: center;
  justify-content: center;
`;
