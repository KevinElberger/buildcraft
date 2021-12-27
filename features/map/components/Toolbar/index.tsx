import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NumberInput } from '../../../../shared/components/NumberInput';
import { selectColumns, selectRows, setRow, setColumn } from '../../slice';
import { DeleteButton } from '../DeleteButton';
import { EditButton } from '../EditButton';

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
      <div>
        <p>Rows</p>
        <NumberInput number={rows} onChange={onRowChange} />
      </div>

      <div>
        <p>Columns</p>
        <NumberInput number={cols} onChange={onColChange} />
      </div>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  bottom: 24px;
  padding: 12px;
  display: grid;
  grid-gap: 24px;
  border-radius: 8px;
  position: absolute;
  width: fit-content;
  place-items: flex-end;
  grid-auto-flow: column;
  background: ${({ theme }) => theme.white};

  p {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;
