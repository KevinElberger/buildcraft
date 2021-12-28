import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectColumns, selectRows, setColumn, setRow } from '../../slice';
import { ColumnButton } from '../ColumnButton';
import { DeleteButton } from '../DeleteButton';
import { EditButton } from '../EditButton';
import { RowButton } from '../RowButton';

export const Toolbar: React.FC = () => {
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
    <ToolbarWrapper>
      <EditButton />
      <DeleteButton />

      <Divider></Divider>

      <RowButton rows={rows} onChange={onRowChange} />
      <ColumnButton cols={cols} onChange={onColChange} />
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  bottom: 24px;
  padding: 12px 24px;
  display: grid;
  grid-gap: 24px;
  border-radius: 10px;
  position: absolute;
  place-items: center;
  grid-auto-flow: column;
  background: ${({ theme }) => theme.white};

  p {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: ${({ theme }) => theme.lightgrey};
`;
