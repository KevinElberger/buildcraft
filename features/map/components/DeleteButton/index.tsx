import { Trash } from '@styled-icons/octicons';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteGrid, selectMode } from '../../slice';

export const DeleteButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const setDrawMode = () => {
    dispatch(deleteGrid());
  };

  return (
    <ButtonWrapper role="button" onClick={setDrawMode} className={mode === 'ERASE' ? 'active' : ''}>
      <Trash size={16} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover,
  &.active  {
    background: ${({ theme }) => theme.bgGrey};
  }
`;
