import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Small } from '../../shared/components/Small';
import { ColumnButton } from '../map/components/ColumnButton';
import { RowButton } from '../map/components/RowButton';
import { selectRows, selectColumns, setRow, setColumn } from '../map/slice';

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
      </Fieldset>
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
  margin: 24px 0 12px 12px;
`;
