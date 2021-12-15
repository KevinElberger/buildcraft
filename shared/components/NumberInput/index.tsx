import * as React from 'react';
import styled from 'styled-components';
import { Plus, Dash } from '@styled-icons/octicons';

interface Props {
  number: number;
  onChange: Function;
}

export const NumberInput = ({ number, onChange }: Props) => {
  const onIncrement = () => {
    onChange(number + 1);
  };
  const onDecrement = () => {
    onChange(number - 1);
  };
  return (
    <Wrapper>
      <Button onClick={onDecrement}>
        <Dash size="16" />
      </Button>
      <div>{number}</div>
      <Button onClick={onIncrement}>
        <Plus size="16" />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2px;
  display: grid;
  user-select: none;
  place-items: center;
  border-radius: 8px;
  grid-column-gap: 8px;
  grid-auto-flow: column;
  border: 1px solid ${({ theme }) => theme.lightgrey};
`;

const Button = styled.div`
  padding: 8px;
  display: grid;
  cursor: pointer;
  border-radius: 6px;
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.bgGrey};
  }
`;
