import { Trash } from '@styled-icons/octicons';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteGrid } from '../../slice';

export const DeleteButton = () => {
  const dispatch = useDispatch();
  const onDelete = () => {
    if (confirm('This will remove all tiles. Are you sure?')) {
      dispatch(deleteGrid());
    }
  };

  return (
    <ButtonWrapper role="button" onClick={onDelete}>
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

  &:hover {
    background: ${({ theme }) => theme.bgGrey};
  }
`;
