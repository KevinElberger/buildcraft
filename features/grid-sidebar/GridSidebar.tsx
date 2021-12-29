import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Small } from '../../shared/components/Small';
import { ColumnButton } from './components/ColumnButton';
import { RowButton } from './components/RowButton';
import { selectRows, selectColumns, setRow, setColumn } from '../map/slice';
import { TileSizeButton } from './components/TileSizeButton';
import { ExportButton } from './components/ExportButton';
import { ImportButton } from './components/ImportButton';

const GridSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const rows = useSelector(selectRows);
  const cols = useSelector(selectColumns);
  const onRowChange = (rowAmount: number) => {
    dispatch(setRow(rowAmount));
  };
  const onColChange = (colAmount: number) => {
    dispatch(setColumn(colAmount));
  };

  return (
    <Layout>
      <Small>Dimensions</Small>

      <Fieldset>
        <RowButton rows={rows} onChange={onRowChange} />
        <ColumnButton cols={cols} onChange={onColChange} />
        <TileSizeButton />
      </Fieldset>


      <Divider />

      <ExportButton />
      <Divider />
      <ImportButton />
    </Layout>
  );
};

export default GridSidebar;

const Layout = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 16px;
  min-width: 260px;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-left: 1px solid ${({ theme }) => theme.lightgrey};
`;

const Fieldset = styled.div`
  display: grid;
  grid-gap: 12px;
  margin: 24px 0 24px 12px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background: ${({ theme }) => theme.lightgrey};
`;
