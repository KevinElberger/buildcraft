import * as React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from './components/Grid';
import { selectColumns, selectRows, selectTileSize } from './slice';

export default function Map() {
  const rows = useSelector(selectRows);
  const cols = useSelector(selectColumns);
  const tileSize = useSelector(selectTileSize);

  return (
    <Grid rows={rows} columns={cols} tileSize={tileSize} />
  );
}
