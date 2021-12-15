import * as React from 'react';
import styled from 'styled-components';
import { Plus, Dash } from '@styled-icons/octicons';

interface Props {
  number: number;
  onChange: Function;
}

export const NumberInput = ({ number, onChange }: Props) => {
  const onIncrement = () => {
    if (number + 1 < 26) onChange(number + 1);
  };
  const onDecrement = () => {
    if (number - 1 > 0) onChange(number - 1);
  };
  return (
    <Wrapper>
      <Button onClick={onDecrement} role="button" data-testid="subtract">
        <Dash size="16" />
      </Button>
      <div>{number}</div>
      <Button onClick={onIncrement} role="button" data-testid="add">
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
